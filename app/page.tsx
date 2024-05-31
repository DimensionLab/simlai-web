"use client";

import CTAbuttons from "@/components/CTAbuttons";
import EngagementCardsParent from "@/components/EngagementCardParent";
import Features from "@/components/features";
import IntroParent from "@/components/IntroParent";
import MailchimpForm from "@/components/MailchimpForm";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import Memo from "@/components/Memo";
import Message from "@/components/Message";
import ProductVideoWrapper from "@/components/ProductVideosParent";
import SimlDialog from "@/components/SimlDialog";
import Stats from "@/components/Stats";
import TalkToTeam from "@/components/TalkToTeam";
import TryPlatformButton from "@/components/TryPlatformButton";
import { useEffect, useState } from "react";
export default function Home() {
  const [isHbFormOpen, setIsHbFormOpen] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
      document.body.appendChild(script);
    
      script.addEventListener('load', () => {
        // @ts-ignore
          if(window.hbspt) {
            // @ts-ignore
            window.hbspt.forms.create({
                portalId: '26843925',
                formId: '06c9217c-4f1a-42cf-97c4-504d2081937e',
                target: '#hubspotForm'
            });
          }
      });
      setIsHbFormOpen(true);
    }, 30000);

    return () => {
      clearTimeout(timeout);
    }
  }, [])

  const handleClose = () => {
    setIsHbFormOpen(false);
  }

  return (
    <>
    <SimlDialog open={isHbFormOpen} title="Interested in downloading our whitepaper?" onClose={handleClose}>
      <div className="flex w-full h-full bg-darkBg items-center justify-center max-h-[80vh] overflow-auto">
        <div id="hubspotForm" className="overflow-hidden justify-center items-center flex-col w-full flex"></div>
      </div>
    </SimlDialog>
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
        <MailchimpForm />
      </MainLayoutWrapper>
    </section>
    </>
  );
}
