export default function SkeletonCard() {
  return (
    <section className="max-w-6xl bg-lightBg rounded-lg text-transparent xl:flex-row card w-96">
      <div className="flex flex-col px-4 py-4 gap-y-2 xl:w-full">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-xl animate-pulse bg-skPurple rounded-lg min-h-[250px]">
            Multi-Scale CFD Simulations: Challenges and Opportunities in Bridging Micro to Macro Scales
          </h2>
          <h3 className="text-sm animate-pulse bg-skPurple rounded-lg w-min">00/00/0000</h3>
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-light text-lg animate-pulse bg-skPurple rounded-lg">Category</p>
          <div className="w-[50px] h-[30px] animate-pulse bg-skPurple rounded-lg">something</div>
        </div>
      </div>
    </section>
  )
}