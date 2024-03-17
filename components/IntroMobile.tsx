import Slider from "./mobile/slider/Slider";

export default function IntroMobile() {
  return (
    <div className="flex flex-col gap-y-10">
      <h1 className="font-black text-5xl lg:text-7xl">Siml.ai</h1>
      <Slider />
      <div>
        <h2 className="font-black text-3xl lg:text-5xl">
          Tame the physics of your projects in hours!
        </h2>
        <p className="lg:text-3xl">
          Siml.ai is a software platform for working with high-performance
          AI-based numerical simulators.
        </p>
      </div>
    </div>
  )
}