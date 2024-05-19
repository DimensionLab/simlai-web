"use client";

import { PropsWithChildren } from 'react'
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "@/components/storyblok/Page";
import Feature from "@/components/storyblok/Feature";
import Grid from "@/components/storyblok/Grid";
import Teaser from "@/components/storyblok/Teaser";
import Caption from "@/components/storyblok/Caption";
import Article from "@/components/blog/Article";
import CaseStudyArticle from "@/components/case-studies/CaseStudyArticle";
import UniversityArticle from "@/components/blog/UniversityArticle";

const components = {
  page: Page,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  caption: Caption,
  article: Article,
  "case-study": CaseStudyArticle,
  "uni-post": UniversityArticle,
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }: PropsWithChildren) {
  return children;
}