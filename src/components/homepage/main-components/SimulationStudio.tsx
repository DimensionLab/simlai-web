import styled from "styled-components";
import tw from "twin.macro";

const SimulationStudioWrapper = styled.div`
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

  .features-container {
    ${tw`
      flex
      flex-col
      gap-y-10
    `}

    .card {
      ${tw`
        flex
        flex-col
      `}

      .title {
        ${tw`
          font-black
          text-xl
        `}
      }
      .description {
        ${tw`
          text-lg
        `}
      }
    }
  }
`;

const SimulationStudio = () => {
  const data = [
    ["Superfast", " Simulations are computed by inferring trained neural network models, achieving speedups of <strong>1,000-100,000x</strong> compared to classical simulation software running on GPUs."],
    ['Interactive "in-site" visualization', "The time it takes to compute one timestep even of highly irregular simulation domain is in low tens of milliseconds, resulting in real-time visualization of simulating physical phenomena."],
    ["Unreal rendering performance", "High-fidelity visualization rendering is achieved by leveraging the powerful Unreal Engine under the hood."]
  ]

  return (
    <SimulationStudioWrapper>
      <img src="assets/simlai/simulation-studio-image.svg" alt="" />
      <div className="header">
        <div className="title">Simulation Studio</div>
        <div className="description">Hybrid web and native application for solving engineering and scientific problems leveraging pre-trained and optimized learned simulators.</div>
      </div>
      <div className="features-container">
        {data.map((feature, index) => (
          <div key={index} className="card">
            <div className="title">{feature[0]}</div>
            {/* this is said to be dangerous, so idk */}
            <div className="description" dangerouslySetInnerHTML={{ __html: feature[1] }}></div> 
          </div>
        ))}
      </div>
      <img src="assets/simlai/model-engineer-release-date.svg" alt="" />
    </SimulationStudioWrapper>
  );
}

export default SimulationStudio;