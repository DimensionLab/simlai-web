import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { ReactNode } from "react";
import StoryblokProvider from "@/app/blog/StoryblokProvider"

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="px-4 py-10">
      <StoryblokProvider>
        {children}
      </StoryblokProvider>
    </main>
  )
}