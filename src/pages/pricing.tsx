import Header from "@/components/homepage/Header";
import Footer from "@/components/homepage/Footer";
import PricingCard from "@/components/pricing-components/PricingCard";
import { useState } from "react";
import DropdownMenu from "@/components/homepage/main-components/mobile-components/DropdownMenu";
import Layout from "@/components/Layout";
import Head from "next/head";
import EngagementCardsParent from "@/components/homepage/main-components/EngagementCardsParent";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  
  const toggleIsMonthly = (whichButton: string) => {
    
    if ( whichButton === "monthly") {
      setIsMonthly(true);
    } else {
      setIsMonthly(false);
    }
  }

  const pricingCardData = {
    tier: {
      free: {
        title: "FREE",
        hasTrial: false,
        price: "FREE",
        items: [
          "<div>Up to 3 public simulators in <a href='../#model-engineer'>Model Engineer</a></div>",
          "Access limited to one Tier 1 computing resource",
        ],
        isEnterprise: false
      },
      starter: {
        title: "STARTER",
        hasTrial: true,
        price: `${isMonthly ? `199` : `1,990`}`,
        items: [
          "50GB SSD storage included",
          "Store datasets of up to 25GB",
          "Access up to Tier 2 computing resources",
          "<div>Up to 10 simulators in <a href='../#model-engineer'>Model Engineer</a></div>",
        ],
        isEnterprise: false
      },
      standard: {
        title: "STANDARD",
        hasTrial: true,
        price: `${isMonthly ? `499` : `4,990`}`,
        items: [
          "250GB SSD storage included",
          "Store datasets of up to 100GB",
          "Access up to Tier 4 computing resources",
          "<div>Up to 20 simulators in <a href='../#model-engineer'>Model Engineer</a></div>",
          "<div>Up to 20 simulators in <a href='../#simulation-studio'>Simulation Studio</a></div>"
        ],
        isEnterprise: false
      },
      pro: {
        title: "PRO",
        hasTrial: true,
        price: `${isMonthly ? `999` : `9,990`}`,
        items: [
          "1TB SSD storage included",
          "Store datasets of up to 250GB",
          "Access of up to Tier 6 computing resources",
          "<div>Unlimited simulators in <a href='../#model-engineer'>Model Engineer</a></div>",
          "<div>Unlimited simulators in <a href='../#simulation-studio'>Simulation Studio</a></div>"
        ],
        isEnterprise: false
      },
      enterprise: {
        title: "ENTERPRISE",
        hasTrial: false,
        price: "",
        items: [
          "All features from Pro",
          "Custom computing resources with tens of GPUs",
          "24/7 support",
          "Custom simulator development",
        ],
        isEnterprise: true
      }
    }
  }

  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  const pricingCards = Object.values(pricingCardData.tier);
  const firstRowCards = pricingCards.slice(0, 3);
  const secondRowCards = pricingCards.slice(3);

  return (
    <>
      <Head>
        <title>Siml.ai - Pricing</title>
        <meta name="description" content="Pricing page on Siml.ai" />
        <meta property="og:image" content="https://siml.ai/assets/simlai/simlai-logo.svg"/>
      </Head>
      <Layout>
        {isOpen ? (
            <section className="flex flex-col bg-[#0D101B] text-white w-full items-center">
              <Header open={isOpen} onClose={ handleOpen } whichSubpage="pricing"/>
              <section className="w-full flex flex-col px-4 max-w-[1400px]">
                <div className="flex flex-col gap-y-3 pt-6">
                  <h1 className="font-bold text-2xl sm:text-5xl">Our Plans and Pricing</h1>
                  <p className="text-[#B4B6C3] font-normal text-xl lg:line-clamp-2">We have plans and prices that fit your business perfectly. <br/> Make your client site a success with our products.</p>
                </div>
                <div className="flex flex-col w-full items-center">
                  <div className="font-bold text-[#8B7CFF] text-2xl w-full flex justify-center py-6">14-days trial!</div>
                  <div className="flex flex-row pb-16">
                    <button id="monthly" onClick={() => toggleIsMonthly("monthly")} className={`${isMonthly ? `bg-[#6B50FF]` : `bg-[#454853]`} rounded-l px-4 font-bold py-3`}>MONTHLY</button>
                    <button id="yearly" onClick={() => toggleIsMonthly("yearly")} className={`${isMonthly ? `bg-[#454853]` : `bg-[#6B50FF]`} rounded-r px-4 font-bold py-3`}>YEARLY</button>
                  </div>
                  <div>
                    <div className="grid grid-cols-1 gap-y-4 w-full xl:grid-cols-10 xl:justify-center xl:gap-x-4">
                      <div className="grid gap-y-4 md:grid-cols-3 md:gap-x-4 xl:col-span-6">
                        {firstRowCards.map((tierData, index) => (
                          <PricingCard
                            key={index}
                            data={tierData}
                            isMonthly={isMonthly}
                          />
                        ))}
                      </div>
                      <div className="grid gap-y-4 md:grid-cols-2 md:gap-x-4 max-xl:md:px-28 max-xl:lg:px-36 xl:col-span-4">
                        {secondRowCards.map((tierData, index) => (
                          <PricingCard
                            key={index}
                            data={tierData}
                            isMonthly={isMonthly}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <EngagementCardsParent/>
              </section>
              <Footer open={!isOpen}/>
            </section>
          ) : (
            <DropdownMenu open={!isOpen} onClose={handleOpen}/>
          )}
      </Layout>
    </>
  );
}

export default Pricing;