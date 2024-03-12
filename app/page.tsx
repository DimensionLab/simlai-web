import CTAbuttons from "@/components/CTAbuttons";
import EngagementCardsParent from "@/components/EngagementCardParent";
import Features from "@/components/features";
import IntroParent from "@/components/IntroParent";
import MailchimpForm from "@/components/MailchimpForm";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import Memo from "@/components/Memo";
import Message from "@/components/Message";
import ProductVideoWrapper from "@/components/ProductVideosParent";
import Stats from "@/components/Stats";
import TalkToTeam from "@/components/TalkToTeam";
import TryPlatformButton from "@/components/TryPlatformButton";

export default function Home() {
  return (
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
        <MailchimpForm />
      </MainLayoutWrapper>
    </section>
  );
}
