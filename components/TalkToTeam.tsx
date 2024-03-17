export default function TalkToTeam() {
  const data = [
    {
      title: "BOOK A DEMO",
      href: "https://meetings-eu1.hubspot.com/michal-bujnak",
    },
    {
      title: "COMPLETE SURVEY TO GET FREE 14-DAYS TRIAL",
      href: "https://dmloc3fzh7g.typeform.com/to/LjYAfoxp",
    },
  ];
  return (
    <section className="flex flex-col max-md:gap-y-10 md:flex-row w-full justify-center items-center px-4 gap-x-4 md:gap-x-64">
      {data.map((item, index) => (
        <a
          href={item.href}
          target="_blank"
          key={index}
          className="flex justify-center w-64 items-center border-[6px] border-[#6B50FF] rounded-xl hover:text-white hover:border-[#8a79eb] hover:bg-[#1c1d20] duration-300 hover:scale-105"
        >
          <span className="p-4 font-bold text-center">{item.title}</span>
        </a>
      ))}
    </section>
  );
}
