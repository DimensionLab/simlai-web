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

  .text-container {
    ${tw`
      xl:grid
      xl:grid-rows-1
      flex
      flex-col
      gap-y-10
      xl:mx-24
      xl:my-24
    `}
    
    .title {
      ${tw`
        text-4xl
        font-black
        xl:text-[6rem]
      `}
    }

    .subtitle-container {
      ${tw`
        flex
        flex-col
        gap-y-10
        xl:grid
        xl:grid-cols-2
        xl:justify-center
        gap-x-4
      `}

      .description {
        ${tw`
          text-[#EBEDFA]
          font-thin
          xl:text-4xl
          flex
          flex-row
        `}

        .desc-text {
          ${tw`
          `}
        }
      }

      .features-container {
        ${tw`
          flex
          flex-col
          gap-y-4
          w-[80%]
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
              w-full
            `}
          }
        }        
      }
    }
  }
`;

const ModelEngineer = () => {
  const data = [
    ["Superfast", "<div>Simulations are computed by inferring trained neural network models, achieving speedups of <strong>1,000-100,000x</strong> compared to classical simulation software running on GPUs.</div>"],
    ['Interactive "in-site" visualization', "The time it takes to compute one timestep even of highly irregular simulation domain is in low tens of milliseconds, resulting in real-time visualization of simulating physical phenomena."],
    ["Unreal rendering performance", "High-fidelity visualization rendering is achieved by leveraging the powerful Unreal Engine under the hood."]
  ]

  return (
    <ModelEngineerWrapper>
      <img src="assets/simlai/simulation-studio-image.svg" alt="" />
      <div className="text-container">
        <div className="title">Simulation Studio</div>
        <div className="subtitle-container">
          <div className="description">
            <div className="desc-text">
              Train and optimize extremely fast physics simulators using deep learning techniques through web-based Model Engineer application.
            </div>
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
        </div>
      </div>
      {/* this needs to be separate elements, not just image, because it has link 'waitlist' in it */}
      {/* <img src="assets/simlai/model-engineer-alpha.svg" alt="" id="waitlist"/> */}
    </ModelEngineerWrapper>
  );
}

export default ModelEngineer;