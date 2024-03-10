import UniversityArticle from "@/components/blog/UniversityArticle";
import { storyblokVersion } from "@/lib/environment";
import { UniversityPostCard } from "@/types/blog";
import { ISbStoryParams, getStoryblokApi } from "@storyblok/react";
import Head from "next/head";
import { redirect } from "next/navigation";

export default async function UniversityPostPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.pop();
  
  if (!slug) {
    return redirect("/university");
  }

  const { data } = await fetchData(slug);

  const { story }: { story: UniversityPostCard } = data;

  return (
    <section className="flex flex-col items-center">
      <Head>
        <title>{story ? `Siml.ai University - ${story.name}` : 'Siml.ai - University Post'}</title>
        <meta property="og:image" content={story.content.thumbnail.filename ? story.content.thumbnail.filename : `https://siml.ai/assets/simlai/url-preview.png`}/>
        <meta property="og:title" content={story ? `Siml.ai - ${story.name}` : `Siml.ai - University Post`}/>
        <meta property="og:url" content="https://siml.ai/"/>
        <meta property="twitter:image" content={story.content.thumbnail.filename ? story.content.thumbnail.filename : `https://siml.ai/assets/simlai/url-preview.png`}/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@siml_ai" />
        <meta name="description" content="Read this Siml.ai University post!" />
        <meta property="og:description" content="Read this Siml.ai University post!"/>
      </Head>
      <UniversityArticle story={story} />
    </section>
  )
}

const fetchData = (slug: string) => {
  const params: ISbStoryParams = {
    version: storyblokVersion,
  }

  return getStoryblokApi().get(`cdn/stories/university/${slug}`, params);
}