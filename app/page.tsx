import CTAbuttons from "@/components/CTAbuttons";
import EngagementCardsParent from "@/components/EngagementCardParent";
import Features from "@/components/features";
import IntroParent from "@/components/IntroParent";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import Memo from "@/components/Memo";
import Message from "@/components/Message";
import ProductVideoWrapper from "@/components/ProductVideosParent";
import Stats from "@/components/Stats";
import TalkToTeam from "@/components/TalkToTeam";
import TryPlatformButton from "@/components/TryPlatformButton";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
          <title>Siml.ai - Platform for fast AI-driven physics simulations</title>
          <meta property="og:image" content="https://siml.ai/assets/simlai/url-preview.png"/>
          <meta property="og:title" content="Siml.ai - Platform for fast AI-driven physics simulations"/>
          <meta property="twitter:image" content="https://siml.ai/assets/simlai/url-preview.png"/>
          <meta property="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@siml_ai" />
          <meta property="og:url" content="https://siml.ai/"/>
          <meta property="og:description" content="Platform for fast AI-driven physics simulations" />
          <meta name="description" content="Platform for fast AI-driven physics simulations" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="flex flex-col w-full h-full py-10 items-center">
        <div className="px-4">
          <IntroParent />
        </div>
        <MainLayoutWrapper isPadding>
          <div className="flex flex-col gap-y-6 items-center xl:hidden">
            <TryPlatformButton />
            <CTAbuttons />
          </div>
          <Stats />
          <TalkToTeam />
          <Features />
          <div className="flex flex-col items-center">
            <Memo />
          </div>
          <ProductVideoWrapper />
        </MainLayoutWrapper>
        <MainLayoutWrapper>
          <Message />
        </MainLayoutWrapper>
        <MainLayoutWrapper isPadding>
          <EngagementCardsParent />
        </MainLayoutWrapper>
      </section>
    </>
  );
}
