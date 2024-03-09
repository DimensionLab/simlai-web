import { ReactNode } from "react";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc"
import StoryblokProvider from "./StoryblokProvider";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
})

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full h-full">
      <StoryblokProvider>
        {children}
      </StoryblokProvider>
    </main>
  )
}