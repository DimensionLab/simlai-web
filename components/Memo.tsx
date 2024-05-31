import Image from "next/image";
import TryPlatformButton from "./TryPlatformButton";
import Link from "next/link";

export default function Memo() {
  return (
    <section className="flex flex-row gap-y-12 lg:gap-x-10">
      <div className="flex flex-col">
        <div className="flex flex-row gap-x-10 items-start h-[60px]">
          <Image
            src="assets/simlai/simlai-logo.svg"
            alt="siml.ai logo"
            id="siml-logo"
            className="p-0 m-0 "
            width={65}
            height={100}
          />
          <Image
            src="assets/simlai/simlai-title.svg"
            alt="siml.ai title"
            id="siml-title"
            className="pt-[20px]"
            width={190}
            height={100}
          />
        </div>
        <div className="flex flex-col py-8 gap-x-10 font-[300] text-3xl w-80">
          Software platform for high-performance AI-based numerical simulators.
        </div>
        <div className="flex flex-col">
          <TryPlatformButton />
        </div>
      </div>
      <div className="flex flex-row">
        <p className="text-md">
          Vast majority of technologies in the world come to life through months or years of extensive simulation during their development. <br /> <br />
          High-performance computing, parallel processing and GPUs helped push the computation time from months to weeks. With the help of applied machine learning, we are seeing a reduction from weeks to days. We think that&apos;s not enough. <br /> <br />
          At <strong className="text-btnPurple"><Link href="https://dimensionlab.org" target="_blank">DimensionLab</Link></strong>, we are building tools for engineers and researchers to tame the physics of their projects in hours. Collectively, they make up a cohesive platform we call Siml.ai. <br /> <br />
          Under the hood, Siml.ai consists of two parts - <strong className="text-btnPurple"><Link href="#model-engineer">Model Engineer</Link></strong> and <strong className="text-btnPurple"><Link href="#simulation-studio">Simulation Studio</Link></strong>.
        </p>
      </div>
    </section>
  );
}
