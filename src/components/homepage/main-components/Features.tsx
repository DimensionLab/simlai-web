import styled from "styled-components";
import tw from "twin.macro";

const FeaturesWrapper = styled.div`
  ${tw`
    py-10
    px-4
  `}

  .container {
    ${tw`
      flex
      flex-col
      items-center
      gap-y-8
      my-10
    `}

    .image {
      ${tw`
        w-full
      `}
      img {
        ${tw`
          w-full
        `}
      }
    }

    .text {
      ${tw`
        flex
        flex-col
        gap-y-3
        mb-6
      `}

      .title {
        ${tw`
          font-black
          text-3xl
        `}
      }

      .description {
        ${tw`
          text-sm
          w-3/4
          text-[#EBEDFA]
        `}
      }
    }
  }
`;

const Features = () => {
  const data = [
    ["assets/simlai/placeholder-feature.svg", "Physics & AI", "SIML.ai combines state-of-the-art machine learning with physics simulation."],
    ["assets/simlai/placeholder-feature.svg", "Fast", "AI-based simulators responds to your input in real-time, which means interactive visualization."],
    ["assets/simlai/placeholder-feature.svg", "Web-based", "No need to install anything or be limited to specific platforms. Everything happens through web interface."],
    ["assets/simlai/placeholder-feature.svg", "Painless scalability", "Our platform deals with the complexities of setting up cloud or HPC infrastructure for you."],
  ];

  return (
    <FeaturesWrapper>
      {data.map((feature, index) => (
        <div key={index} className="container">
          <div className="image">
            <img src={feature[0]} alt={feature[1]} />
          </div>
          <div className="text">
            <div className="title">{feature[1]}</div>
            <div className="description">{feature[2]}</div>
          </div>
        </div>
      ))}
    </FeaturesWrapper>
  );
}

export default Features;