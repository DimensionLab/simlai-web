import { ReactNode } from "react";
import StoryblokProvider from "../../StoryblokProvider";
import { apiPlugin, storyblokInit } from "@storyblok/react";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
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