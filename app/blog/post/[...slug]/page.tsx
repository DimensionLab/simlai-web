import Article from "@/components/blog/Article";
import { storyblokVersion } from "@/lib/environment";
import { BlogStory } from "@/types/blog";
import { ISbStoryParams, getStoryblokApi } from "@storyblok/react";
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
      <Article story={story} />
    </section>
  )
}

const fetchData = (slug: string) => {
  const params: ISbStoryParams = {
    version: storyblokVersion,
  }

  return getStoryblokApi().get(`cdn/stories/blog/${slug}`, params, { cache: "no-cache" });
}