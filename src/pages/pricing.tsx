import styled from "styled-components";
import Header from "@/components/homepage/Header";
import Footer from "@/components/homepage/Footer";
import PricingCard from "@/components/pricing-components/PricingCard";
import { useState } from "react";
import DropdownMenu from "@/components/homepage/main-components/mobile-components/DropdownMenu";
import Layout from "@/components/Layout";
import Head from "next/head";
import EngagementCardsParent from "@/components/homepage/main-components/EngagementCardsParent";

const PricingWrapper = styled.div`
`

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  
  const toggleIsMonthly = (whichButton: string) => {
    
    if ( whichButton === "monthly") {
      setIsMonthly(true);
    } else {
      setIsMonthly(false);
    }
  }
  const pricingProps = [
    [
      "STARTER",
      `${isMonthly ? "199" : "1,990"}`,
      "50GB SSD storage included. Store datasets of up to 25GB",
      "Access up to Tier 2 computing resources",
      "Up to 10 simulators in Model Engineer"
    ],
    [
      "STANDARD",
      `${isMonthly ? "499" : "4,990"}`,
      "250GB SSD storage included. Store datasets of up to 100GB",
      "Access up to Tier 4 computing resources",
      "Up to 20 simulators in Model Engineer. Up to 20 simulators in Simulation Studio"
    ],
    [
      "PRO",
      `${isMonthly ? "999" : "9,990"}`,
      "1TB SSD storage included. Store datasets of up to 250GB",
      "Access up to Tier 6 computing resources",
      "Unlimited simulators in Model Engineer. Unlimited simulators in Simulation Studio"
    ],
    [
      "null",
      "null",
      "null",
      "null",
      "null",
    ]
  ]

  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Head>
        <title>Siml.ai - Pricing</title>
        <meta name="description" content="Pricing page on Siml.ai" />
        <meta property="og:image" content="https://siml.ai/assets/simlai/simlai-logo.svg"/>
      </Head>
      <Layout>
        {isOpen ? (
            <PricingWrapper className="flex flex-col bg-[#0D101B] text-white w-full items-center">
              <Header open={isOpen} onClose={ handleOpen } whichSubpage="pricing"/>
              <section className="w-full flex flex-col px-4 max-w-7xl">
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
                    <div className="grid gap-y-6 grid-cols-1 sm:grid-cols-2 sm:gap-x-6 xl:grid-cols-4">
                      {pricingProps.map((props, index) => {
                        const [title, price, storage, access, simulators] = props;
                        const isEnterprise = index === 3;
                        return <PricingCard key={index} title={title} price={price} storage={storage} access={access} simulators={simulators} isEnterprise={isEnterprise} isMonthly={isMonthly} />;
                      })}
                    </div>
                  </div>
                </div>
                <EngagementCardsParent/>
              </section>
              <Footer open={!isOpen}/>
            </PricingWrapper>
          ) : (
            <DropdownMenu open={!isOpen} onClose={handleOpen}/>
          )}
      </Layout>
    </>
  );
}

export default Pricing;