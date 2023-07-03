import styled from "styled-components";
import tw from "twin.macro";
import Header from "@/components/homepage/Header";
import Footer from "@/components/homepage/Footer";
import PricingCard from "@/components/pricing-components/PricingCard";
import Funding from "@/components/homepage/main-components/Funding";
import TryPlatform from "@/components/homepage/main-components/TryPlatform";
import { useEffect, useState } from "react";
import DropdownMenu from "@/components/homepage/main-components/mobile-components/DropdownMenu";
import Layout from "@/components/Layout";
import Head from "next/head";

const PricingWrapper = styled.div`
  ${tw`
    flex
    flex-col
    bg-[#0D101B]
    text-white
    w-full
  `}

  .headline {
    ${tw`
      flex
      flex-col
      // items-center
      px-4
      gap-y-4
      xl:items-center
      // xl:w-[60%]
      xl:max-w-[1800px]
      xl:mb-24
      xl:mt-12
      text-white
      w-full
      self-center
    `}
    h1 {
      ${tw`
        font-black
        text-3xl
        xl:text-7xl
        xl:w-full
        xl:flex
        xl:flex-col
        // xl:items-center
      `}
    }
    p {
      ${tw`
        text-lg
        text-[#B4B6C3]
        xl:text-3xl
        xl:w-full
        xl:flex
        xl:flex-col
        // xl:ml-96
      `}
    }
  }
  .pricing-tabs {
    ${tw`
      xl:flex
      xl:flex-col
      xl:items-center
    `}
    .btn-monthly-yearly {
      ${tw`
        px-4
        flex
        justify-center
        my-4
        xl:text-4xl
        text-white
      `}
      #monthly {
        ${tw`
          // bg-[#454853]
          rounded-l
          px-4
          font-bold
          py-3
        `}
      }
      #yearly {
        ${tw`
          // bg-[#6B50FF]
          rounded-r
          px-4
          font-bold
          py-3
        `}
      }
    }
    .cards-container {
      ${tw`
        flex
        flex-col
        gap-y-6
        my-6
        items-center
        xl:grid
        xl:grid-cols-4
        xl:mx-24
        xl:items-center
        // xl:w-full
        xl:justify-center
        xl:max-w-[1800px]
        text-white

        md:grid
        md:grid-cols-2
      `}
    }
  }

  #try-funding {
    ${tw`
      md:grid
      md:grid-cols-2
      md:my-24
      md:mx-0
      md:h-full

      xl:mx-52
      xl:my-44
      xl:max-w-[1800px]
      text-white
      xl:self-center
    `}
  }
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
      `${isMonthly ? "599" : "5,990"}`,
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
        <meta property="og:image" content="https://simlai-web.vercel.app/assets/simlai/simlai-logo.svg"/>
      </Head>
      <Layout>
        {isOpen ? (
            <PricingWrapper>
              <Header open={isOpen} onClose={ handleOpen } whichSubpage="pricing"/>
              <div className="headline pt-12">
                <h1>Our Plans and Pricing</h1>
                <p className="max-sm:w-[75%]">We have plans and prices that fit your business perfectly. Make your client site a success with our products.</p>
              </div>
              <div className="pricing-tabs">
                <div className="flex w-full justify-center text-[#8B7CFF] text-xl font-bold pt-4">14-days trial!</div>
                <div className="btn-monthly-yearly">
                  <button id="monthly" onClick={() => toggleIsMonthly("monthly")} className={`${isMonthly ? `bg-[#6B50FF]` : `bg-[#454853]`}`}>MONTHLY</button>
                  <button id="yearly" onClick={() => toggleIsMonthly("yearly")} className={`${isMonthly ? `bg-[#454853]` : `bg-[#6B50FF]`}`}>YEARLY</button>
                </div>
                <div>
                  <div className="cards-container">
                    {pricingProps.map((props, index) => {
                      const [title, price, storage, access, simulators] = props;
                      const isEnterprise = index === 3;
                      return <PricingCard key={index} title={title} price={price} storage={storage} access={access} simulators={simulators} isEnterprise={isEnterprise} isMonthly={isMonthly} />;
                    })}
                  </div>
                  {/* <div className="text-[#7C7F8B] w-full pl-28 hidden xl:flex">
                    * upgradeable,          ** public and private,          *** worth the price of the plan
                  </div> */}
                </div>
              </div>
              <div className="width-limited" id="try-funding">
                <TryPlatform/>
                <Funding/>
              </div>
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