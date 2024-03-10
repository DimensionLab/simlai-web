import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { ReactNode } from "react";
import StoryblokProvider from "../StoryblokProvider";
import Head from "next/head";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="px-4 py-10">
      <Head>
        <title>Siml.ai - Blog</title>
        <meta property="og:image" content="https://siml.ai/assets/simlai/url-preview.png"/>
        <meta property="og:title" content="Siml.ai - Blog"/>
        <meta property="og:url" content="https://siml.ai/"/>
        <meta property="twitter:image" content="https://siml.ai/assets/simlai/url-preview.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@siml_ai" />
        <meta name="description" content="Read the latest articles from Siml.ai blog!" />
        <meta property="og:description" content="Read the latest articles from Siml.ai blog!"/>
      </Head>
      <StoryblokProvider>
        {children}
      </StoryblokProvider>
    </main>
  )
}