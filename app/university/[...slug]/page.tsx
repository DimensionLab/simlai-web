import UniversityArticle from "@/components/blog/UniversityArticle";
import { storyblokVersion } from "@/lib/environment";
import { UniversityPostCard } from "@/types/blog";
import { ISbStoryParams, getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";
import type { Metadata } from "next";
import { ResolvingMetadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const { data } = await fetchData(slug);
  const { story }: { story: UniversityPostCard } = data;

  return {
    title: story.name,
    description: `Read the article ${story.name} on the Siml.ai University`,
    openGraph: {
      title: story.name,
      description: `Read the article ${story.name} on the Siml.ai University`,
      type: "article",
      url: `https://siml.ai/university/${story.slug}`,
      images: [
        {
          url: story.content.thumbnail.filename,
          alt: `Siml.ai University Article Image for ${story.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@siml_ai",
    },
  }
}

export default async function UniversityPostPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.pop();
  
  if (!slug) {
    return redirect("/university");
  }

  const { data } = await fetchData(slug);

  const { story }: { story: UniversityPostCard } = data;

  return (
    <section className="flex flex-col items-center">
      {/* <UniversityArticle story={story} /> */}
      <StoryblokStory story={story} firstPublishedAt={story.first_published_at}/>
    </section>
  )
}

const fetchData = (slug: string) => {
  const params: ISbStoryParams = {
    version: storyblokVersion,
  }

  return getStoryblokApi().get(`cdn/stories/university/${slug}`, params);
}