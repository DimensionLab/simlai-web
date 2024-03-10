import PricingPage from "@/components/pricing/PricingPage";
import Head from "next/head";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Siml.ai - Pricing</title>
        <meta property="og:image" content="https://siml.ai/assets/simlai/url-preview.png"/>
        <meta property="og:title" content="Siml.ai - Pricing"/>
        <meta property="og:url" content="https://siml.ai/"/>
        <meta property="twitter:image" content="https://siml.ai/assets/simlai/url-preview.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@siml_ai" />
        <meta name="description" content="Review Siml.ai's pricing tiers for our advanced, AI-driven physics simulations." />
        <meta property="og:description" content="Review Siml.ai's pricing tiers for our advanced, AI-driven physics simulations."/>
      </Head>
      <PricingPage />
    </>
  )
}