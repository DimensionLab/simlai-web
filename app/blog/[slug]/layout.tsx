import { ReactNode } from "react";
import StoryblokProvider from "../StoryblokProvider";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import Grid from "@/components/storyblok/Grid";
import Feature from "@/components/storyblok/Feature";
import Page from "@/components/storyblok/Page";
import Article from "@/components/blog/Article";

const components = {
  grid: Grid,
  feature: Feature,
  page: Page,
  "article": Article
}

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
})

export default function PostLayout({ children }: { children: ReactNode }) {
  return (
    <main className="px-4 py-10">
      <StoryblokProvider>
        {children}
      </StoryblokProvider>
    </main>
  )
}