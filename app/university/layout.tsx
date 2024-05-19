import { ReactNode } from "react";
import Image from "next/image";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryblokProvider";
import type { Metadata } from "next";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
});

export const metadata: Metadata = {
  title: "Siml.ai - University",
  description:
    "Learn everything about Siml.ai and find out how to utilize it to achieve incredible things!",
  keywords:
    "physics, simulations, AI, machine learning, deep learning, university, siml.ai university",
  icons: [
    {
      rel: "icon",
      url: "/assets/simlai/simlai-logo.svg",
    },
  ],
  openGraph: {
    title: "Siml.ai - University",
    description:
      "Learn everything about Siml.ai and find out how to utilize it to achieve incredible things!",
    images: [
      {
        url: "https://siml.ai/assets/simlai/url-preview.png",
        width: 1200,
        height: 630,
        alt: "Siml.ai - University",
      },
    ],
    url: "https://siml.ai/",
  },
  twitter: {
    card: "summary_large_image",
    site: "@siml_ai",
  },
};

export default function UniversityLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <div
        className="absolute top-0 w-full bg-cover bg-center bg-no-repeat text-center z-[-1]"
        style={{
          backgroundImage:
            "url('/assets/simlai/page-bg-transparent.webp')",
          height: "100%",
        }}
      ></div>
      <StoryblokProvider>
        <main className="px-4 py-10">{children}</main>
      </StoryblokProvider>
    </div>
  );
}
