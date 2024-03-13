import Image from "next/image";
import TryPlatformButton from "./TryPlatformButton";
import Link from "next/link";

export default function Memo() {
  return (
    <section className="flex flex-col gap-y-12 lg:flex-row lg:gap-x-10">
      <div className="flex flex-col gap-y-6 max-w-xl">
        <div className="flex gap-x-4 items-baseline">
          <Image
            src="/assets/simlai/simlai-logo.svg"
            alt="logo"
            width={100}
            height={100}
          />
          <h3 className="font-black text-7xl mb-0 h-full">Siml.ai</h3>
        </div>
        <p className="font-[100] text-3xl">
          Software platform for high-performance AI-based numerical simulators.
        </p>
        <TryPlatformButton />
      </div>
      <div className="">
        <p className="text">
          Vast majority of technologies in the world come to life through months or years of extensive simulation during their development. <br/> <br/>
          High-performance computing, parallel processing and GPUs helped push the computation time from months to weeks. With the help of applied machine learning, we are seeing a reduction from weeks to days. We think that&apos;s not enough. <br/> <br/>
          At <strong className="text-btnPurple"><Link href="https://dimensionlab.org" target="_blank">DimensionLab</Link></strong>, we are building tools for engineers and researchers to tame the physics of their projects in hours. Collectively, they make up a cohesive platform we call Siml.ai. <br/> <br/>
          Under the hood, Siml.ai consists of two parts - <strong className="text-btnPurple"><Link href="#model-engineer">Model Engineer</Link></strong> and <strong className="text-btnPurple"><Link href="#simulation-studio">Simulation Studio</Link></strong>.
        </p>
      </div>
    </section>
  );
}
