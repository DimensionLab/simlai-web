"use client";

import Head from "next/head";
import { useState } from "react";
import EngagementCardsParent from "../EngagementCardParent";
import PricingCard from "./PricingCard";
import Link from "next/link";
import ClientPricingModal from "./ClientPricingModal";

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
      <section className="w-full flex flex-col px-4 max-w-[1400px] py-10">
        <div className="flex flex-col gap-y-3 pt-6">
          <h1 className="font-bold text-2xl sm:text-5xl mx-auto">Our Plans and Pricing</h1>
          <p className="text-[#B4B6C3] font-normal text-xl lg:line-clamp-2 mx-auto text-center">We have plans and prices that fit your business perfectly. <br/> Make your client site a success with our products.</p>
        </div>
        <div className="flex flex-col w-full items-center">
          {/* <div className="font-bold text-[#8B7CFF] text-2xl w-full flex justify-center py-6">14-days trial!</div> */}
          <div className="flex flex-row py-16 text-xs">
            <button id="monthly" onClick={() => toggleIsMonthly("monthly")} className={`${isMonthly ? `bg-[#6B50FF]` : `bg-[#454853]`} rounded-l px-4 font-bold py-3`}>MONTHLY</button>
            <button id="yearly" onClick={() => toggleIsMonthly("yearly")} className={`${isMonthly ? `bg-[#454853]` : `bg-[#6B50FF]`} rounded-r px-4 font-bold py-3`}>YEARLY</button>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="grid grid-cols-1 gap-y-4 w-full xl:grid-cols-1 xl:justify-center xl:gap-x-4 ">
              <div className="grid gap-y-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-4 xl:grid-cols-5 w-full">
                {Object.values(pricingCardData.tier).map((tierData, index) => (
                  <PricingCard
                    key={index}
                    data={tierData}
                    isMonthly={isMonthly}
                  />
                ))}
                <div className="flex flex-col gap-y-4 lg:gap-x-6 items-center max-xl:justify-end pb-[24px] xl:col-span-5 xl:flex-row xl:justify-center xl:py-12 sm:px-4">
                  <span className="xl:w-[60%]">
                    We&apos;re also giving out 
                    <strong> 100% discount for 1 month </strong> 
                    for everybody who completes our 
                    <Link href="https://dmloc3fzh7g.typeform.com/to/LjYAfoxp" className="text-[#8B7CFF]" target="_blank"> Siml.ai Early Adopter Survey</Link>
                    - you can get more information in our community Discord, which you can join 
                    <Link href="https://discord.gg/UxQyC9PEqt" className="text-[#8B7CFF]" target="_blank"> here</Link>.
                  </span>
                  {/* <form className="flex flex-col w-full xl:h-full xl:w-[40%]" onSubmit={handleSubmit}>
                    <label className="text-xs text-[#D0D2DF] sm:pt-16 xl:pt-0">Apply your Siml.ai Early Adopter discount code:</label>
                    <div className="flex gap-x-2 flex-row w-full pt-2">
                      <input type="text" placeholder="Enter discount code" className=" bg-[#373A45] px-6 py-4 text-sm rounded text-gray-500 w-[70%]" disabled/>
                      <button className="px-4 rounded text-lg font-bold bg-[#6B50FF] flex justify-center items-center w-[30%]" disabled>APPLY</button>
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <EngagementCardsParent/>
        <ClientPricingModal />
      </section>
    </>
  );
}

export default Pricing;