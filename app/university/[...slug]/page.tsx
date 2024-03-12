import UniversityArticle from "@/components/blog/UniversityArticle";
import { storyblokVersion } from "@/lib/environment";
import { UniversityPostCard } from "@/types/blog";
import { ISbStoryParams, getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";
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