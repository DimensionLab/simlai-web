import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Siml.ai - Pricing",
  description: "Review Siml.ai's pricing tiers for our advanced, AI-driven physics simulations.",
  keywords: "physics, simulations, AI, machine learning, deep learning, pricing",
  icons: [
    {
      rel: "icon",
      url: "/assets/simlai/simlai-logo.svg",
    },
  ],
  openGraph: {
    title: "Siml.ai - Pricing",
    description: "Review Siml.ai's pricing tiers for our advanced, AI-driven physics simulations.",
    images: [
      {
        url: "https://siml.ai/assets/simlai/url-preview.png",
        width: 1200,
        height: 630,
        alt: "Siml.ai - Pricing",
      },
    ],
    url: "https://siml.ai/pricing",
  },
  twitter: {
    card: "summary_large_image",
    site: "@siml_ai",
  },
};

export default function PricingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}