import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PageNotFound = () => {
  const router = useRouter();
  const pagePath = router.asPath;
  
  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds === 0) {
      const origin = window.location.origin;
      router.push(origin);
    }
  }, [seconds])
  

  return (
    <section className="grid w-full h-screen bg-[#0D101B]">
      <main className="w-full flex flex-col items-center justify-center text-white gap-y-4 px-4">
        <div className="flex flex-row items-end gap-x-2">
          <img src="/assets/simlai/simlai-logo.svg" alt="" className="w-12 lg:w-16"/>
          <img src="/assets/simlai/simlai-title.svg" alt="" className="w-32 lg:w-44"/>
        </div>
        <div className="flex flex-col items-center gap-y-2 text-center">
          <h1 className="text-lg lg:text-3xl">Unfortunately, there&apos;s no <strong className="text-[#8B7CFF]">{pagePath}</strong> page.</h1>
          <p className="text-sm lg:text-xl">You are going to be redirected to homepage in <strong className="text-[#8B7CFF]">{seconds}</strong> seconds.</p>
        </div>
      </main>
    </section>
  )
}

export default PageNotFound;