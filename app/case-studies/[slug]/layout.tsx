import { ReactNode } from "react";
import StoryblokProvider from "@/components/StoryblokProvider";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import Grid from "@/components/storyblok/Grid";
import Feature from "@/components/storyblok/Feature";
import Page from "@/components/storyblok/Page";
import Caption from "@/components/storyblok/Caption";
import CaseStudyArticle from "@/components/case-studies/CaseStudyArticle";

const components = {
  grid: Grid,
  feature: Feature,
  page: Page,
  caption: Caption,
  "case-study": CaseStudyArticle
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