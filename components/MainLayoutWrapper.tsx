import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function MainLayoutWrapper({ isPadding, children }: { isPadding?: boolean, children: ReactNode }) {
  return (
    <section className={cn(`flex flex-col w-full h-full py-10 gap-y-32 ${isPadding && 'px-4 max-w-5xl'}`)}>
      { children }
    </section>
  )
}