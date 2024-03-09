import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CoverLayout from "@/components/coverLayout";

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
      </body>
    </html>
  );
}
