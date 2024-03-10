"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import { startTransition, useEffect, useState } from "react";

export default function NotFound() {
  const [url, setUrl] = useState("");
  
  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds === 0) {
      const origin = window.location.origin;
      startTransition(() => {
        redirect(origin);
      })
    }
  }, [seconds])
  
  useEffect(() => {
    if (window) {
      setUrl(window.location.pathname);
    }
  }, [])
  return (
    <section className="grid w-full bg-[#0D101B]">
      <main className="w-full flex flex-col items-center justify-center text-white gap-y-4 px-4">
        <div className="flex flex-row items-baseline gap-x-2">
          <Image src="/assets/simlai/simlai-logo.svg" alt="" width={80} height={80}/>
          <h2 className="text-6xl font-black">Siml.ai</h2>
        </div>
        <div className="flex flex-col items-center gap-y-2 text-center">
          <h1 className="text-lg lg:text-3xl">Unfortunately, there&apos;s no <strong className="text-[#8B7CFF]">{url}</strong> page.</h1>
          <p className="text-sm lg:text-xl">You are going to be redirected to homepage in <strong className="text-[#8B7CFF]">{seconds}</strong> seconds.</p>
        </div>
      </main>
    </section>
  )
}