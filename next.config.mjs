/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "a.storyblok.com"
    ],
  },
  env: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN,
  }
};

export default nextConfig;
