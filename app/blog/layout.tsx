import { ReactNode } from "react";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc"
import StoryblokProvider from "./StoryblokProvider";
import type { Metadata } from "next";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
})

export const metadata: Metadata = {
  title: "Siml.ai - Blog",
  description: "Read the latest articles from Siml.ai blog!",
  keywords: "physics, simulations, AI, machine learning, deep learning, blog, articles",
  icons: [
    {
      rel: "icon",
      url: "/assets/simlai/simlai-logo.svg",
    },
  ],
  openGraph: {
    title: "Siml.ai - Blog",
    description: "Read the latest articles from Siml.ai blog!",
    images: [
      {
        url: "https://siml.ai/assets/simlai/url-preview.png",
        width: 1200,
        height: 630,
        alt: "Siml.ai - Blog",
      },
    ],
    url: "https://siml.ai/",
  },
  twitter: {
    card: "summary_large_image",
    site: "@siml_ai",
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full h-full">
      <StoryblokProvider>
        {children}
      </StoryblokProvider>
    </main>
  )
}