import Image from "next/image";
import css from "./componentStyles/introParent.module.css";
import CTAbuttons from "./CTAbuttons";
import TryPlatformButton from "./TryPlatformButton";

const IntroDesktop = () => {
  return (
    <div className="xl:my-12 xl:pt-20 xl:pb-20">
      <div className="flex flex-row mb-20 gap-x-44 px-12">
        <div className="flex flex-col w-1/2 gap-y-10">
          <div className="flex flex-row items-end gap-x-10">
            <Image
              src="assets/simlai/simlai-logo.svg"
              alt="siml.ai logo"
              id="siml-logo"
              width={60}
              height={60}
            />
            <Image
              src="assets/simlai/simlai-title.svg"
              alt="siml.ai title"
              id="siml-title"
              className="w-48"
              width={192}
              height={60}
            />
          </div>
          <div className="font-bold text-4xl">
            Tame the physics <br />
            of your projects in hours!
          </div>
          <div className="text-[#B4B6C3] text-xl break-words">
            Siml.ai is a software platform for working with high-performance AI-based numerical simulators.
          </div>
          <TryPlatformButton />
          <div className="-mt-6 flex flex-row gap-x-2">
            <CTAbuttons />
          </div>
        </div>
        <section className="flex w-full">
          <div className={css.relative}>
            <Image
              src="/assets/simlai/simulation-studio-image.png"
              alt="model engineer screenshot"
              className=""
              id="cover-img"
              width={960}
              height={640}
              priority
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mMss3nyn4EIwDiqkL4KAX5SGd1NFAjQAAAAAElFTkSuQmCC"
              placeholder="blur"
            />
            <Image
              src="/assets/simlai/model_engineer_cover_image.png"
              alt="screenshot from siml"
              className={`absolute -left-[7%] -bottom-[20%] ${css.visualEditorImg}`}
              width={300 * 1.56}
              height={300}
              priority
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mMss3nyn4EIwDiqkL4KAX5SGd1NFAjQAAAAAElFTkSuQmCC"
              placeholder="blur"
            />
            <Image
              src="/assets/simlai/desktop-intro-pics/rotate2.png"
              alt="screenshot from siml"
              className="absolute left-[45%] -bottom-[20%]"
              width={200 * 1.4}
              height={200}
              priority
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mMss3nyn4EIwDiqkL4KAX5SGd1NFAjQAAAAAElFTkSuQmCC"
              placeholder="blur"
            />
            <Image
              src="/assets/simlai/desktop-intro-pics/rotate1.png"
              alt="screenshot from siml"
              className="absolute -right-[10%] -bottom-[10%]"
              width={200 * 1.4}
              height={200}
              priority
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mMss3nyn4EIwDiqkL4KAX5SGd1NFAjQAAAAAElFTkSuQmCC"
              placeholder="blur"
            />
          </div> 
        </section>
      </div>
    </div>
  );
};

export default IntroDesktop;
