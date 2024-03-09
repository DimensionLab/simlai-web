"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "@/components/storyblok/Page";
import Feature from "@/components/storyblok/Feature";
import Grid from "@/components/storyblok/Grid";
import Teaser from "@/components/storyblok/Teaser";

const components = {
  page: Page,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}