"use server";

import { storyblokVersion } from "@/lib/environment";
import { BlogPostCard, BlogStory } from "@/types/blog";
import { ISbStoriesParams, apiPlugin, getStoryblokApi, storyblokInit } from "@storyblok/react/rsc";
import { STORIES_PER_PAGE } from "./constants";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
});

export default async function fetchMorePosts (page: number = 1) {
  const response = await fetchData((page).toString());
  console.log("res total: ", response.total)
  const { stories }: { stories: BlogStory[] } = response.data;
  const newStories: BlogPostCard[] = stories.map((blogPost) => {
    return {
      title: blogPost.content.title,
      published_at: blogPost.first_published_at,
      category: blogPost.content.category.pop(),
      image: blogPost.content.image,
      slug: blogPost.slug,
      _uid: blogPost.uuid,
      date: blogPost.content.date,
    };
  });
  return {
    data: newStories,
    total: response.total,
  };
}

async function fetchData(page: string = "1") {
  const nPage = parseInt(page);
  const storyblokApi = getStoryblokApi();
  const params: ISbStoriesParams = {
    version: storyblokVersion,
    starts_with: "blog/",
    is_startpage: false,
    per_page: STORIES_PER_PAGE,
    page: nPage,
    sort_by: "first_published_at:desc",
  };
  const response = await storyblokApi.get(`cdn/stories/`, params);
  return response;
}