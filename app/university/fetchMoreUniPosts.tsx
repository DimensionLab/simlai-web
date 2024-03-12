"use server";

import { storyblokVersion } from "@/lib/environment";
import { BlogPostCard, BlogStory, UniversityPostCard, UniversityStory } from "@/types/blog";
import { ISbStoriesParams, apiPlugin, getStoryblokApi, storyblokInit } from "@storyblok/react/rsc";
import { STORIES_PER_PAGE } from "@/app/blog/constants";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
});

export default async function fetchMorePosts (page: number = 1) {
  const response = await fetchData((page).toString());
  const { stories }: { stories: UniversityPostCard[] } = response.data;
  return {
    data: stories,
    total: response.total,
  };
}

async function fetchData(page: string = "1") {
  const nPage = parseInt(page);
  const storyblokApi = getStoryblokApi();
  const params: ISbStoriesParams = {
    version: storyblokVersion,
    starts_with: "university/",
    is_startpage: false,
    per_page: 10,
    page: nPage,
    sort_by: "first_published_at:desc",
  };
  const response = await storyblokApi.get(`cdn/stories/`, params);
  return response;
}