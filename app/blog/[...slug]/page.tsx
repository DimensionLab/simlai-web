import { storyblokVersion } from "@/lib/environment";
import { BlogStory } from "@/types/blog";
import { ISbStoryParams, StoryblokStory, getStoryblokApi } from "@storyblok/react/rsc";
import type { Metadata, ResolvingMetadata } from "next";
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
  const { story }: { story: BlogStory } = data;

  return {
    title: story.name,
    description: `Read the article ${story.name} on the Siml.ai Blog`,
    openGraph: {
      title: story.name,
      description: `Read the article ${story.name} on the Siml.ai Blog`,
      type: "article",
      url: `https://siml.ai/blog/${story.slug}`,
      images: [
        {
          url: story.content.image.filename,
          alt: `Siml.ai Blog Article Image for ${story.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@siml_ai",
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.pop();
  
  if (!slug) {
    return redirect("/blog");
  }

  const { data } = await fetchData(slug);

  const { story }: { story: BlogStory } = data;

  return (
    <section className="flex flex-col items-center">
      <StoryblokStory story={story} firstPublishedAt={story.first_published_at}/>
    </section>
)
}

const fetchData = (slug: string) => {
  const params: ISbStoryParams = {
    version: storyblokVersion,
  }

  return getStoryblokApi().get(`cdn/stories/blog/${slug}`, params);
}