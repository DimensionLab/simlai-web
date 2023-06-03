import styled from "styled-components";
import tw from "twin.macro";

const ModelEngineerWrapper = styled.div`
  ${tw`
    flex
    flex-col
    px-4
    pt-6
    pb-10
    gap-y-14
  `}

  .header {
    ${tw`
      flex
      flex-col
      gap-y-10
    `}

    .title {
      ${tw`
        text-4xl
        font-black
      `}
    }

    .description {
      ${tw`
        text-3xl
        text-[#EBEDFA]
        font-thin
      `}
    }
  }
`;

const ModelEngineer = () => {
  return (
    <ModelEngineerWrapper>
      <img src="assets/simlai/product-image1.svg" alt="" />
      <div className="header">
        <div className="title">Simulation Studio</div>
        <div className="description">Hybrid web and native application for solving engineering and scientific problems leveraging pre-trained and optimized learned simulators.</div>
      </div>
    </ModelEngineerWrapper>
  );
}

export default ModelEngineer;