import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CoverLayout from "@/components/coverLayout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siml.ai - Platform for fast AI-driven physics simulations",
  description: "Platform for fast AI-driven physics simulations",
  keywords: "physics, simulations, AI, machine learning, deep learning",
  icons: [
    {
      rel: "icon",
      url: "/assets/simlai/simlai-logo.svg",
    },
  ],
  openGraph: {
    title: "Siml.ai - Platform for fast AI-driven physics simulations",
    description: "Platform for fast AI-driven physics simulations",
    images: [
      {
        url: "https://siml.ai/assets/simlai/url-preview.png",
        width: 1200,
        height: 630,
        alt: "Siml.ai - Platform for fast AI-driven physics simulations",
      },
    ],
    url: "https://siml.ai/",
  },
  twitter: {
    card: "summary_large_image",
    site: "@siml_ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CoverLayout>
          {children}
        </CoverLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
