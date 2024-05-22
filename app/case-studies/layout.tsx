import { ReactNode } from "react";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryblokProvider";
import type { Metadata } from "next";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
});

export const metadata: Metadata = {
  title: "Siml.ai - Case Studies",
  description: "Read how Siml.ai is used across the industries",
  keywords:
    "physics, simulations, AI, machine learning, deep learning, case studies, articles",
  icons: [
    {
      rel: "icon",
      url: "/assets/simlai/simlai-logo.svg",
    },
  ],
  openGraph: {
    title: "Siml.ai - Case Studies",
    description: "Read how Siml.ai is used across the industries",
    images: [
      {
        url: "https://siml.ai/assets/simlai/url-preview.png",
        width: 1200,
        height: 630,
        alt: "Siml.ai - Case Studies",
      },
    ],
    url: "https://siml.ai/",
  },
  twitter: {
    card: "summary_large_image",
    site: "@siml_ai",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="w-full h-full">
      <div
        className="absolute top-0 w-full bg-cover bg-center bg-no-repeat text-center z-[-1]"
        style={{
          backgroundImage: "url('/assets/simlai/page-bg-transparent.webp')",
          height: "100%",
        }}
      ></div>
      <StoryblokProvider>
        <main className="px-4 py-10">{children}</main>
      </StoryblokProvider>
    </main>
  );
}
