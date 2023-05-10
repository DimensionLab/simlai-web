import type { AppProps } from 'next/app'
import { storyblokInit, apiPlugin } from "@storyblok/react";
 
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_API_TOKEN,
  use: [apiPlugin]
});

// console.log(process.env.NEXT_PUBLIC_API_TOKEN);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
