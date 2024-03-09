import Image from "next/image";

const data = [
  [
    "/assets/simlai/feature1.png",
    "Physics & AI",
    "Siml.ai combines state-of-the-art machine learning with physics simulation.",
  ],
  [
    "/assets/simlai/feature2.png",
    "Fast",
    "AI-based simulators responds to your input in real-time, which means interactive visualization.",
  ],
  [
    "/assets/simlai/feature3.png",
    "Web-based",
    "No need to install anything or be limited to specific platforms. Everything happens through web interface.",
  ],
  [
    "/assets/simlai/feature4.png",
    "Painless scalability",
    "Our platform deals with the complexities of setting up cloud or HPC infrastructure for you.",
  ],
];

export default function Features() {
  return (
    <section className="flex w-full flex-col justify-center items-center gap-y-16 lg:grid lg:grid-cols-2 lg:mx-auto lg:max-w-6xl" id="features">
      {data.map((d, i) => (
        <div key={i} className="flex w-full flex-col gap-y-4 lg:max-w-sm lg:mx-auto">
          <Image 
            key={i} 
            src={d[0]} 
            alt={d[1]} 
            width={354}
            height={234}
            layout="responsive"
          />
          <div className="flex flex-col gap-y-2">
            <h3 className="font-bold text-xl">{d[1]}</h3>
            <p className="text-md font-light">{d[2]}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
