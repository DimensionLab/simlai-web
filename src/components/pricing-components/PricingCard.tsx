import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const PricingCardWrapper = styled.div`
  ${tw`
    px-4
    flex
    flex-col
    w-full
    h-full
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
    height: 100%;  // added this to ensure the cards take full height available

    h1 {
      ${tw`
        font-black
        text-2xl
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
      ${tw`
        flex-grow
        // xl:w-[80%]
      `}

      #number {
        ${tw`
          text-3xl
        `}
      }
    }
    .storage {
      ${tw`
        flex-grow
      `}
    }
    .access {
      ${tw`
        flex-grow
        w-[70%]
      `}
    }
    .simulator {
      ${tw`
        flex-grow
      `}
    }
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
        xl:hidden
      `}
    }
  }
`;

interface PricingProps {
  title: String,
  price: String,
  storage: String,
  access: String,
  simulators: String,
  isEnterprise: boolean,
}

const PricingCard = (props: PricingProps) => {
  const [isEnterprise, setIsEnterprise] = useState(false);

  useEffect(() => {
    setIsEnterprise(props.isEnterprise);
  }, [isEnterprise]);

  return (
    <PricingCardWrapper>
      {!isEnterprise ? (
        <div className="card">
          <h1>{props.title}</h1>
          <hr/>
          <div className="price-container">
            <span>$</span>
            <span id="number">{props.price}</span>
            <span> / month</span>
          </div>
          <div className="storage">{props.storage}</div>
          <div className="access">{props.access}</div>
          <div className="simulators">{props.simulators}</div>
          <button id="choose-plan">CHOOSE PLAN</button>
          <div className="description">* upgradeable, ** public and private, *** worth the price of the plan</div>
        </div>
      ) : (
        <div className="card">
          <h1>ENTERPRISE</h1>
          <hr/>
          <div className="price-container">
            <span id="challenge">Have a bigger challenge to solve?</span>
          </div>
          <div className="storage">All features from Pro</div>
          <div className="access">Custom computing resources with tens of GPUs</div>
          <div className="simulators">24/7 support</div>
          <div className="simulators">Custom simulator development</div>
          <button id="choose-plan">CHOOSE PLAN</button>
          <div className="description">* upgradeable, ** public and private, *** worth the price of the plan</div>
        </div>
      )}
      
    </PricingCardWrapper>
  )
}

export default PricingCard;