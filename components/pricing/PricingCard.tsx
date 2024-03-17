import { cn } from "@/lib/utils";
import Link from "next/link";

interface PricingProps {
  data: {
    title: string;
    hasTrial: boolean;
    price: string;
    items: string[];
    isEnterprise: boolean;
  };
  isMonthly: boolean;
}

const PricingCard = (props: PricingProps) => {
  const data = props.data;

  const lineColor = [
    "border-[#6DBC39]",
    "border-[#00BAC5]",
    `border-[#4B8AFF]`,
    "border-[#8B7CFF]",
    "border-[#D28DF7]",
  ];

  const whichLineColor = () => {
    switch (data.title) {
      case "FREE":
        return lineColor[0];
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

  const handleTitle = () => {
    if (data.title === "FREE") {
      return `ALWAYS`;
    } else if (data.isEnterprise) {
      return ``;
    } else {
      return `€`;
    }
  };

  return (
    <section className="flex flex-col w-full h-full">
      <div className="flex flex-col items-center bg-[#222530] rounded-md py-6 gap-y-6 text-center h-full">
        <div className="flex flex-row items-center justify-between w-full px-4">
          <h1 className="font-semibold text-lg text-center">{data.title}</h1>
          {data.isEnterprise || data.title === "FREE" ? (
            ``
          ) : (
            <label className="bg-[#454853] text-xs rounded-3xl px-2 py-1">
              14-DAYS TRIAL
            </label>
          )}
        </div>
        <hr className={cn(`w-full border-2 mb-4 ${whichLineColor()}`)} />
        <div className="items-end text-2xl font-light px-4 flex w-full justify-start">
          <span
            className={`${data.title === "FREE" ? `pr-2 pl-4` : `pl-4`} ${
              data.title === "FREE" ? `text-[16px]` : `text-2xl`
            } flex h-full items-end`}
          >
            <div className="flex h-full justify-end items-end -mb-[6px]">
              {handleTitle()}
            </div>
          </span>
          <span id="number" className="text-[40px] font-light">
            {data.price}
          </span>
          <span
            className={`${data.title === "FREE" ? `hidden` : ``} ${
              data.isEnterprise ? `text-left text-[16px] leading-5` : ``
            } ${data.isEnterprise ? `xl:-mt-[1px]` : `-mb-[6px]`}`}
          >
            {data.isEnterprise
              ? "Have a bigger challenge to solve?"
              : `/ ${props.isMonthly ? "month" : "year"}`}
          </span>
        </div>
        <ul
          className={`w-full px-8 flex flex-col gap-y-4 h-full text-xs list-disc ${
            data.isEnterprise ? `xl:-mt-[7px]` : ``
          }`}
        >
          {data.items.map((item, index) => (
            <li
              key={index}
              className={`w-full text-left list-item`}
              dangerouslySetInnerHTML={{ __html: item }}
            ></li>
          ))}
        </ul>
        <Link
          href="https://platform.siml.ai/model-engineer/billing"
          target="_blank"
        >
          <button
            id="choose-plan"
            className="bg-btnPurple px-6 py-2 rounded font-bold"
          >
            CHOOSE PLAN
          </button>
        </Link>
        {/* <div className="description">* upgradeable, ** public and private, *** worth the price of the plan</div> */}
      </div>
    </section>
  );
};

export default PricingCard;
