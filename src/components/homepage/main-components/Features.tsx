import styled from "styled-components";
import tw from "twin.macro";

const FeaturesWrapper = styled.div`
  ${tw`
    py-10
    px-4
    flex
    flex-col
    gap-y-12

    xl:grid
    xl:grid-cols-2
    xl:gap-x-0
    xl:mt-44
  `}

  .container {
    ${tw`
      flex
      flex-col
      items-center
      gap-y-6
      // my-24
      justify-center
    `}

    .image {
      ${tw`
        w-full
        flex
        justify-center
      `}
      img {
        ${tw`
          w-full
          xl:max-w-md
        `}
      }
    }

    .text {
      ${tw`
        flex
        flex-col
        gap-y-3
        mb-6
        w-full
        xl:max-w-md
      `}

      .title {
        ${tw`
          font-bold
          text-3xl
          max-md:text-2xl
          max-xl:text-5xl
        `}
      }

      .description {
        ${tw`
          text-sm
          w-3/4
          text-[#EBEDFA]
          max-sm:text-sm
          max-xl:text-2xl
          max-xl:w-full
        `}
      }
    }
  }
`;

const Features = () => {
  const data = [
    ["assets/simlai/feature1.svg", "Physics & AI", "Siml.ai combines state-of-the-art machine learning with physics simulation."],
    ["assets/simlai/feature2.svg", "Fast", "AI-based simulators responds to your input in real-time, which means interactive visualization."],
    ["assets/simlai/feature3.svg", "Web-based", "No need to install anything or be limited to specific platforms. Everything happens through web interface."],
    ["assets/simlai/feature4.svg", "Painless scalability", "Our platform deals with the complexities of setting up cloud or HPC infrastructure for you."],
  ];

  return (
    <FeaturesWrapper id="features">
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