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
          <PricingCard/>
          <PricingCard/>
          <PricingCard/>
          <PricingCard/>
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