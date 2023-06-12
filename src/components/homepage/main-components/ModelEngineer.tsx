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
          w-full
          md:w-[80%]
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
    ["Datasets management", "Construct large datasets from classical simulation exports or physical sensors that collect precise measurements from real-world experiments."],
    ['Building blocks', "Quickly develop the model architecture for the simulators’ desired capabilities and physical constraints. Customizable to the bone through code editor."],
    ["High performance computing, automated", "One-click A100 GPUs. Train and aggressively optimize learnable simulators in high-performance, GPU-powered cloud or HPC centers without the need to deal with the complexities of managing the cloud infrastructure."]
  ]

  return (
    <ModelEngineerWrapper id="model-engineer">
      <img src="assets/simlai/product-image1.svg" alt="" />
      <div className="text-container">
        <div className="title">Model Engineer</div>
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