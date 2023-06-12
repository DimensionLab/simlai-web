import styled from "styled-components";
import tw from "twin.macro";

const PricingCardWrapper = styled.div`
 ${tw`
  px-4
 `}
  .card {
    ${tw`
      flex
      flex-col
      items-center
      bg-[#222530]
      rounded-xl
      py-6
      gap-y-6
      text-center
    `}
    h1 {
      ${tw`
        font-black
        text-2xl
        w-full
        text-center
      `}
    }
    hr {
      ${tw`
        w-full
        border-2
        border-[#00BAC5]
        mb-4
      `}
    }
    .price-container {
      span {}
      #number {
        ${tw`
          text-4xl
        `}
      }
    }
    .storage {}
    .access {
      ${tw`
        w-[70%]
      `}
    }
    .simulator {}
    #choose-plan {
      ${tw`
        bg-[#6B50FF]
        px-6
        py-4
        rounded
        font-black
      `}
    }
    .description {
      ${tw`
        w-[50%]
        text-xs
        text-[#7C7F8B]
      `}
    }
  }
`;

const PricingCard = () => {
  return (
    <PricingCardWrapper>
      <div className="card">
        <h1>STARTER</h1>
        <hr/>
        <div className="price-container">
          <span>$</span>
          <span id="number">199</span>
          <span> / month</span>
        </div>
        <div className="storage">50GB SSD storage included* <br/> Store datasets of up to 25GB**</div>
        <div className="access">Access to Tier 2 computing resources with up to 2 GPUs per server instance</div>
        <div className="simulators">Up to 10 simulators in Model Engineer** <br/>Up to 10 simulators in Simulation Studio** <br/>Compute credits included***</div>
        <button id="choose-plan">CHOOSE PLAN</button>
        <div className="description">* upgradeable, ** public and private, *** worth the price of the plan</div>
      </div>
    </PricingCardWrapper>
  )
}

export default PricingCard;