import Article from "@/components/blog/Article";
import { storyblokVersion } from "@/lib/environment";
import { BlogPostCard, BlogStory } from "@/types/blog";
import { ISbStoriesParams, ISbStoryParams, getStoryblokApi } from "@storyblok/react";
import { redirect } from "next/navigation";
import { STORIES_PER_PAGE } from "../constants";

export default async function BlogPostPage({ params }: { params: { slug: string}}) {
  const slug = params.slug;
  
  if (!slug) {
    return redirect("/blog");
  }

  const { data } = await fetchData(slug);

  const { story }: { story: BlogStory } = data;
  return (
    <section className="flex flex-col items-center">
      <Article story={story} />
      {params.slug}
    </section>
  )
}

const fetchData = (slug: string) => {
  const params: ISbStoryParams = {
    version: storyblokVersion,
  }

  return getStoryblokApi().get(`cdn/stories/blog/${slug}`, params);
}

export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get('cdn/links/', {
    version: storyblokVersion,
    per_page: 50,
  });
  let paths: string[] = [];
  Object.keys(data.links).forEach((linkKey) => {
    const slug = data.links[linkKey].slug;
    
    if(slug.includes('university/')) {
      return;
    }

    if(data.links[linkKey].is_folder) {
      return;
    }

    let splittedSlug = slug.split('/');
    const slugAtEnd = splittedSlug.pop();
    if (slugAtEnd) {
      paths.push(slugAtEnd);
    }
  });  

  return paths.map((path) => ({
    slug: path,
  }))
}