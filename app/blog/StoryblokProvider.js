"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "@/components/storyblok/Page";
import Feature from "@/components/storyblok/Feature";
import Grid from "@/components/storyblok/Grid";
import Teaser from "@/components/storyblok/Teaser";
import Article from "@/components/blog/Article";
import UniversityArticle from "@/components/blog/UniversityArticle";

const components = {
  page: Page,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  article: Article,
  "uni-post": UniversityArticle,
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}