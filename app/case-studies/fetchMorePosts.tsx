"use server";

import { storyblokVersion } from "@/lib/environment";
import { CaseStudyCard, CaseStudyStory } from "@/types/case-study";
import { ISbStoriesParams, apiPlugin, getStoryblokApi, storyblokInit } from "@storyblok/react/rsc";
import { CASE_STUDIES_PER_PAGE } from "./constants";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
});

export default async function fetchMorePosts (page: number = 1) {
  const response = await fetchData((page).toString());
  const { stories }: { stories: CaseStudyStory[] } = response.data;
  const newStories: CaseStudyCard[] = stories.map((caseStudyPost) => {
    return {
      title: caseStudyPost.content.title,
      published_at: caseStudyPost.first_published_at,
      category: caseStudyPost.content.category.pop(),
      image: caseStudyPost.content.image,
      slug: caseStudyPost.slug,
      _uid: caseStudyPost.uuid,
      date: caseStudyPost.content.date,
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
    starts_with: "case-studies/",
    is_startpage: false,
    per_page: CASE_STUDIES_PER_PAGE,
    page: nPage,
    sort_by: "first_published_at:desc",
  };
  const response = await storyblokApi.get(`cdn/stories/`, params);
  return response;
}