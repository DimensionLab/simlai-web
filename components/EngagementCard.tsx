import { cn } from "@/lib/utils";
import css from "./componentStyles/engagementCard.module.css";

interface EngagementCardProps {
    title: string,
    subtitle: string,
    buttonText: string,
    buttonHref: string,
    bgColor: "variable" | "darker" | string,
}

const EngagementCard = (props: EngagementCardProps) => {
  const variant = props.bgColor === "variable" ? css.variable : css.darker;
  
  return (
    <section className="flex w-full">
      <div className={cn(`${css.engagementCardWrapper} ${variant}`)}>
        <main className="flex flex-col gap-y-8 py-16 px-8 w-full justify-between h-full">
          <h1 className="text-3xl font-bold lg:text-4xl">{props.title}</h1>
          <h2 className="text-xl">{props.subtitle}</h2>
          <a href={props.buttonHref} className="text-sm px-4 py-[11px] border rounded w-fit font-bold hover:bg-white hover:text-black duration-[0.6s]">{props.buttonText}</a>
        </main>
      </div>
    </section>
  )
}

export default EngagementCard;

