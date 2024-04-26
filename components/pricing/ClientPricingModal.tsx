"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, DialogFooter } from "../ui/Modal";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiCursorDefaultClick, mdiEmail, mdiAccountMultiple } from "@mdi/js";

export default function ClientPricingModal() {
  const [open, toggleOpen] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      toggleOpen(true);
    }, 1000 * 10);

    return () => clearTimeout(time);
  }, [])
  return (
    <Dialog open={open}>
      <DialogContent className="bg-darkBg border-4 border-purple-500 w-[90%] lg:w-full max-w-3xl px-6 gap-y-10">
        <DialogHeader className="flex flex-col gap-y-10">
          <DialogTitle className="text-4xl sm:text-5xl font-bold text-center">Not sure which plan is the best fit for <strong className="font-bold text-cyan-400">your needs</strong>?</DialogTitle>
          <DialogDescription className="text-lg font-light text-center px-3">
            Talk to our team to get personalized guidance and find the perfect solution for your business.
          </DialogDescription>
        </DialogHeader>
        <section className="flex flex-col gap-y-4 gap-x-4 mx-auto">
          <Link href="https://meetings-eu1.hubspot.com/peter-macinsky" className="text-cyan-400 flex gap-x-2" target="_blank">
            <Icon path={mdiCursorDefaultClick} size={1}/>
            Schedule a personal meeting 
          </Link>
          <Link href="https://discord.gg/UxQyC9PEqt" className="text-cyan-400 flex gap-x-2" target="_blank">
            <Icon path={mdiAccountMultiple} size={1}/>
            Ask on our community Discord
          </Link>
          <Link href="mailto:hello@dimensionlab.org" className="text-cyan-400 flex gap-x-2" prefetch={false}>
            <Icon path={mdiEmail} size={1}/>
            Write us an e-mail
          </Link>
        </section>
        <DialogFooter>
          <button className="bg-lightBg px-4 py-2 rounded" onClick={() => toggleOpen(!open)}>Close</button>
        </DialogFooter>
      </DialogContent>
  </Dialog>
  )
}