export default function SkeletonCard() {
  return (
    <section className="flex flex-col w-full max-w-6xl bg-lightBg rounded-lg text-transparent xl:flex-row">
      <div className="aspect-video animate-pulse bg-shadcnMuted rounded-t-lg xl:w-3/4 xl:rounded-r-none xl:rounded-l-lg">something</div>
      <div className="flex flex-col px-4 py-4 gap-y-2 xl:w-1/4 xl:justify-between xl:min-w-[288px]">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-xl animate-pulse bg-shadcnMuted rounded-lg">
            Multi-Scale CFD Simulations: Challenges and Opportunities in Bridging Micro to Macro Scales
          </h2>
          <h3 className="text-sm animate-pulse bg-shadcnMuted rounded-lg w-min">00/00/0000</h3>
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-light text-lg animate-pulse bg-shadcnMuted rounded-lg">Category</p>
          <div className="w-[50px] h-[30px] animate-pulse bg-shadcnMuted rounded-lg">something</div>
        </div>
      </div>
    </section>
  )
}