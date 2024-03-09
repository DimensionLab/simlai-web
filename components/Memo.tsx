import Image from "next/image";
import TryPlatformButton from "./TryPlatformButton";
import MailchimpForm from "./MailchimpForm";

export default function Memo() {
  return (
    <section className="flex flex-col lg:flex-row lg:gap-x-10">
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
      <div className="max-xl:hidden">
        <p className="text">
          Vast majority of technologies in the world come to life through months or years of extensive simulation during their development. <br/> <br/>
          High-performance computing, parallel processing and GPUs helped push the computation time from months to weeks. With the help of applied machine learning, we are seeing a reduction from weeks to days. We think that&apos;s not enough. <br/> <br/>
          At <strong className="text-btnPurple"><a href="https://dimensionlab.org">DimensionLab</a></strong>, we are building tools for engineers and researchers to tame the physics of their projects in hours. Collectively, they make up a cohesive platform we call Siml.ai. <br/> <br/>
          Under the hood, Siml.ai consists of two parts - <strong className="text-btnPurple"><a href="#model-engineer">Model Engineer</a></strong> and <strong className="text-btnPurple"><a href="#simulation-studio">Simulation Studio</a></strong>.
        </p>
      </div>
    </section>
  );
}
