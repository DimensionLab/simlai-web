import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "a.storyblok.com" }],
  },
  env: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.dimensionlab.org/products/simlai',
        basePath: false,
        permanent: true,
      },
      {
        source: '/blog',
        destination: 'https://www.dimensionlab.org/blog',
        basePath: false,
        permanent: true,
      },
      {
        source: '/blog/:path*',
        destination: 'https://www.dimensionlab.org/blog/:path*',
        basePath: false,
        permanent: true,
      },
      {
        source: '/pricing',
        destination: 'https://www.dimensionlab.org/products/simlai/pricing',
        basePath: false,
        permanent: true,
      },
      {
        source: '/university',
        destination: 'https://www.dimensionlab.org/products/simlai/university',
        basePath: false,
        permanent: true,
      },
      {
        source: '/university/:path*',
        destination: 'https://www.dimensionlab.org/products/simlai/university/:path*',
        basePath: false,
        permanent: true,
      },
      {
        source: '/case-studies',
        destination: 'https://www.dimensionlab.org/case-studies',
        basePath: false,
        permanent: true,
      },
      {
        source: '/case-studies/:path*',
        destination: 'https://www.dimensionlab.org/case-studies/:path*',
        basePath: false,
        permanent: true,
      },
    ]
  },
};

export default withSentryConfig(
  nextConfig,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "dimensionlab",
    project: "simlai-landing-page",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  }
);
