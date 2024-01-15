export const Stats = () => {
  const data = [
    ["90%+ ", "costs saved"],
    ['500+ ', "minutes simulated"],
    ["300+ ", "users"]
  ]
  return (
    <section className="flex flex-col w-full">
      <section className="flex flex-row w-full justify-center px-4 gap-x-2 mt-4 mb-10 sm:justify-between"> 
        {data.map((d, i) => (
          <div key={i} className="flex flex-col items-center px-2">
            <div className="text-2xl font-black sm:text-5xl">{d[0]}</div>
            <div className="text-sm text-center text-gray-400 sm:text-2xl">{d[1]}</div>
          </div>
        ))}
      </section>
    </section>
  )
}