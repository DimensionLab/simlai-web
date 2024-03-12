import Icon from "@mdi/react";
import Image from "next/image";
import { mdiCheck, mdiMinus } from "@mdi/js";
import { cn } from "@/lib/utils";
import css from "@/components/componentStyles/simlLoading.module.css";

type Props = {
  state: "loading" | "success" | "error";
  text: string;
  statusSide?: "left" | "right";
}

export default function SimlLoading(props: Props) {
  const size = 16;
  const statusSide = props.statusSide ?? "right";
  return (
    <div className={cn(`flex items-center gap-x-[8px] w-max ${statusSide === "left" && 'flex-row-reverse'}`)}>
      <h1 className="label-01 text-[--secondary]">{props.text}</h1>
      <div className={css.simlLoadingContainer}>
        { props.state === "success" && <Icon path={mdiCheck} className="bg-[--lime-40] text-[--dark] rounded-[50%] p-1 w-[16px]"/> }
        { props.state === "error" && <Icon path={mdiMinus} className="bg-[--red-40] text-[--dark] rounded-[50%] p-1 w-[16px] rotate-[45deg]"/> }
        { props.state === "loading" &&
          <>
            <Image src="/assets/loading/loader_phase1.svg" alt="loading" width={size} height={size} className={css.simlLoadingItem} id="loadingPhase1" />
            <Image src="/assets/loading/loader_phase2.svg" alt="loading" width={size} height={size} className={css.simlLoadingItem} id="loadingPhase2" />
            <Image src="/assets/loading/loader_phase3.svg" alt="loading" width={size} height={size} className={css.simlLoadingItem} id="loadingPhase3" />
            <Image src="/assets/loading/loader_phase4.svg" alt="loading" width={size} height={size} className={css.simlLoadingItem} id="loadingPhase4" />
          </>
        }
      </div>
    </div>
  )
}