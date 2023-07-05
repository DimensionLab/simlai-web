import styled from "styled-components";

const FeaturesWrapper = styled.div`
`;

const Features = () => {
  const data = [
    ["assets/simlai/feature1.png", "Physics & AI", "Siml.ai combines state-of-the-art machine learning with physics simulation."],
    ["assets/simlai/feature2.png", "Fast", "AI-based simulators responds to your input in real-time, which means interactive visualization."],
    ["assets/simlai/feature3.png", "Web-based", "No need to install anything or be limited to specific platforms. Everything happens through web interface."],
    ["assets/simlai/feature4.png", "Painless scalability", "Our platform deals with the complexities of setting up cloud or HPC infrastructure for you."],
  ];

  return (
    <FeaturesWrapper id="features" className="w-full flex items-center justify-center">
      <div className="w-full grid-cols-1 grid items-center justify-center px-4 gap-y-20 pt-6 pb-28 lg:grid-cols-2 lg:gap-x-8 h-full lg:py-44 max-w-6xl xl:gap-x-44">
        {data.map((feature, index) => (
          <div key={index} className="flex flex-col gap-y-6">
            <div className="w-full h-full object-cover">
              <img src={feature[0]} alt={feature[1]} className="w-full object-cover h-full"/>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="text-xl font-bold">{feature[1]}</div>
              <div className="text-md font-light">{feature[2]}</div>
            </div>
          </div>
        ))}
      </div>
    </FeaturesWrapper>
  );
}

export default Features;