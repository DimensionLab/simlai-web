import styled from "styled-components";
import tw from "twin.macro";
import Header from "@/components/homepage/Header";
import Footer from "@/components/homepage/Footer";
import PricingCard from "@/components/pricing-components/PricingCard";
import Funding from "@/components/homepage/main-components/Funding";
import TryPlatform from "@/components/homepage/main-components/TryPlatform";

const PricingWrapper = styled.div`
  ${tw`
    flex
    flex-col
  `}

  .headline {
    ${tw`
      flex
      flex-col
      // items-center
      px-4
      gap-y-4
    `}
    h1 {
      ${tw`
        font-black
        text-3xl
      `}
    }
    p {
      ${tw`
        text-lg
        w-[80%]
        text-[#B4B6C3]
      `}
    }
  }
  .pricing-tabs {
    .btn-monthly-yearly {
      ${tw`
        px-4
        flex
        justify-center
        my-8
      `}
      #monthly {
        ${tw`
          bg-[#454853]
          rounded-l
          px-4
          font-black
          py-3
        `}
      }
      #yearly {
        ${tw`
          bg-[#6B50FF]
          rounded-r
          px-4
          font-black
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
        xl:grid
        xl:grid-cols-4
        xl:mx-24
      `}
    }
  }

  #try-funding {
    ${tw`
      xl:grid
      xl:grid-cols-2
      xl:my-52
      xl:mx-52
    `}
  }
`

const Pricing = () => {
  const pricingProps = [
    [
      "STARTER",
      "199",
      "50GB SSD storage included* Store datasets of up to 25GB**",
      "Access to Tier 2 computing resources with up to 2 GPUs per server instance",
      "Up to 10 simulators in Model Engineer** Up to 10 simulators in Simulation Studio** Compute credits included***"
    ],
    [
      "STANDARD",
      "599",
      "250GB SSD storage included* Store datasets of up to 100GB**",
      "Access to Tier 3 computing resources with up to 4 GPUs per server instance",
      "Up to 20 simulators in Model Engineer** Up to 20 simulators in Simulation Studio** Compute credits included***"
    ],
    [
      "PRO",
      "999",
      "1TB SSD storage included* Store datasets of up to 100GB**",
      "Access to Tier 4 computing resources with up to 8 GPUs per server instance",
      "Unlimited simulators in Model Engineer** Unlimited simulators in Simulation Studio** Compute credits included***"
    ]
  ]
  return (
    <PricingWrapper>
      <Header/>
      <div className="headline">
        <h1>Our Plans and Pricing</h1>
        <p>We have plans and prices <br/> that fit your business perfectly. <br/>Make your client site a success <br/>with our products.</p>
      </div>
      <div className="pricing-tabs">
        <div className="btn-monthly-yearly">
          <button id="monthly">MONTHLY</button>
          <button id="yearly">YEARLY</button>
        </div>
        <div className="cards-container">
          <PricingCard title={pricingProps[0][0]} price={pricingProps[0][1]} storage={pricingProps[0][2]} access={pricingProps[0][3]} simulators={pricingProps[0][4]} isEnterprise={false}/>
          <PricingCard title={pricingProps[1][0]} price={pricingProps[1][1]} storage={pricingProps[1][2]} access={pricingProps[1][3]} simulators={pricingProps[1][4]} isEnterprise={false}/>
          <PricingCard title={pricingProps[2][0]} price={pricingProps[2][1]} storage={pricingProps[2][2]} access={pricingProps[2][3]} simulators={pricingProps[2][4]} isEnterprise={false}/>
          <PricingCard title={"null"} price={"null"} storage={"null"} access={"null"} simulators={"null"} isEnterprise={true}/>
        </div>
      </div>
      <div className="width-limited" id="try-funding">
        <TryPlatform/>
        <Funding/>
      </div>
      <Footer/>
    </PricingWrapper>
  );
}

export default Pricing;