import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const PricingCardWrapper = styled.div<{ lineColor: string }>`
  ${tw`
    // px-4
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
      rounded-md
      py-6
      gap-y-6
      text-center
    `}
    height: 100%;  // added this to ensure the cards take full height available

    h1 {
      ${tw`
        font-semibold
        text-lg
        text-center
      `}
    }
    hr {
      ${tw`
        w-full
        border-2
        mb-4
      `}

      border-color: ${props => props.lineColor};
    }
    .price-container {
      ${tw`
        flex-grow
        // xl:w-[80%]
        text-2xl
        font-light
        px-4
      `}

      #number {
        ${tw`
          text-[40px]
          font-light
        `}
      }
    }

    ul {
      a {
        color: #6B50FF;
        font-weight: 700;
      }
    }
    #choose-plan {
      ${tw`
        bg-[#6B50FF]
        px-6
        py-4
        rounded
        font-bold
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
  data: {
    title: string;
    hasTrial: boolean;
    price: string;
    items: string[];
    isEnterprise: boolean;
  },
  isMonthly: boolean
}

const PricingCard = (props: PricingProps) => {
  const [isEnterprise, setIsEnterprise] = useState(false);
  const data = props.data;

  const lineColor = [
    `#6DBC39`,
    `#00BAC5`,
    `#4B8AFF`,
    `#8B7CFF`,
    `#D28DF7`
  ]

  const whichLineColor = () => {
    switch (data.title) {
      case "FREE":
        return lineColor[0]
      case "STARTER":
        return lineColor[1];
      case "STANDARD":
        return lineColor[2];
      case "PRO":
        return lineColor[3];
      default:
        return lineColor[4];
    }
  };

  useEffect(() => {
    setIsEnterprise(data.isEnterprise);
  }, [isEnterprise]);

  const handleTitle = () => {
    if (data.title === "FREE" ) {
      return `ALWAYS`;
    }
    else if(data.isEnterprise) {
      return ``;
    } else {
      return `€`;
    }
  }

  return (
    <PricingCardWrapper lineColor={whichLineColor()}>
      <div className="card">
        <div className="flex flex-row items-center justify-between w-full px-4">
          <h1>{data.title}</h1>
          {data.isEnterprise || data.title ==="FREE" ? `` : (
            <label className="bg-[#454853] text-xs rounded-3xl px-2 py-1">14-DAYS TRIAL</label>
          )}
        </div>
        <hr/>
        <div className="price-container">
          <span className={`${data.title === "FREE" ? `pr-2` : ``}`}>{handleTitle()}</span>
          <span id="number">{data.price}</span>
          <span className={`${data.title === "FREE" ? `hidden` : ``}`}> 
          {data.isEnterprise ? "Have a bigger challenge to solve?" : (
            `/ ${props.isMonthly ? "month" : "year"}`
          )}
          </span>
        </div>
        <ul className="w-full px-8 flex flex-col gap-y-4 h-full text-xs list-disc">
          {data.items.map((item, index) => (
            <li key={index} className="w-full text-left list-item" dangerouslySetInnerHTML={ {__html: item} }></li>
          ))}
        </ul>
        <a href="https://platform.siml.ai/model-engineer/billing">
          <button id="choose-plan">CHOOSE PLAN</button>
        </a>
        {/* <div className="description">* upgradeable, ** public and private, *** worth the price of the plan</div> */}
      </div>
      
    </PricingCardWrapper>
  )
}

export default PricingCard;