import { ReactNode } from "react";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc"
import StoryblokProvider from "@/app/blog/StoryblokProvider";
import Head from "next/head";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
})

export default function UniversityLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full h-full">
      <Head>
        <title>Siml.ai - University</title>
        <meta property="og:image" content="https://siml.ai/assets/simlai/url-preview.png"/>
        <meta property="og:title" content="Siml.ai - University"/>
        <meta property="og:url" content="https://siml.ai/"/>
        <meta property="twitter:image" content="https://siml.ai/assets/simlai/url-preview.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@siml_ai" />
        <meta name="description" content="Learn everything about Siml.ai and find out how to utilize it to achieve incredible things!" />
        <meta property="og:description" content="Learn everything about Siml.ai and find out how to utilize it to achieve incredible things!"/>
      </Head>
      <StoryblokProvider>
        {children}
      </StoryblokProvider>
    </main>
  )
}