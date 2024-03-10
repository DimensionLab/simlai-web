import Article from "@/components/blog/Article";
import { storyblokVersion } from "@/lib/environment";
import { BlogStory } from "@/types/blog";
import { ISbStoryParams, getStoryblokApi } from "@storyblok/react";
import Head from "next/head";
import { redirect } from "next/navigation";

export default async function BlogPostPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.pop();
  
  if (!slug) {
    return redirect("/blog");
  }

  const { data } = await fetchData(slug);

  const { story }: { story: BlogStory } = data;

  return (
    <section className="flex flex-col items-center">
      <Head>
        <title>{story ? `Siml.ai - ${story.name}` : 'Siml.ai - Blog Article'}</title>
        <meta property="og:image" content={story.content.image.filename ? story.content.image.filename : `https://siml.ai/assets/simlai/url-preview.png`}/>
        <meta property="og:title" content={story ? `Siml.ai - ${story.name}` : `Siml.ai - Blog Article`}/>
        <meta property="og:url" content={"https://siml.ai"}/>
        <meta property="twitter:image" content={story.content.image.filename ? story.content.image.filename : `https://siml.ai/assets/simlai/url-preview.png`}/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@siml_ai" />
        <meta name="description" content="Read this blog post on Siml.ai blog!" />
        <meta property="og:description" content="Read this blog post on Siml.ai blog!"/>
      </Head>
      <Article story={story} />
    </section>
  )
}

const fetchData = (slug: string) => {
  const params: ISbStoryParams = {
    version: storyblokVersion,
  }

  return getStoryblokApi().get(`cdn/stories/blog/${slug}`, params);
}