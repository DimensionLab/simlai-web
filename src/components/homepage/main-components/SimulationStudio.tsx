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
          font-light
          xl:text-4xl
          flex
          flex-row
        `}

        .desc-text {
          ${tw`
            font-light
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
              font-bold
              text-xl
            `}
          }
          .description {
            ${tw`
              text-lg
              w-full
              font-light
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
    <ModelEngineerWrapper id="simulation-studio">
      <ImageWrapper>
        <img src="assets/simlai/simulation-studio-image.png" alt="" className=""/>
      </ImageWrapper>
      <div className="text-container">
        <div className="title">Simulation Studio</div>
        <div className="subtitle-container">
          <div className="description">
            <div className="desc-text">
            Leverage trained AI simulator models for solving engineering and scientific problems, by constructing interactive, physics- and data-driven digital twins.
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

const ImageWrapper = styled.div`
  background: linear-gradient(180deg, #C063F9 0%, #8B7CFF 100%);
  border-radius: 0.8rem;
  padding: 0.4rem;
  
  @media (min-width: 1024px) {
    padding: 1.3rem;
  }

  img {
    border: 5px solid rgba(59, 17, 81, 0.40);
    border-radius: 0.8rem;

    @media(min-width: 1024px) {
      border: 10px solid rgba(59, 17, 81, 0.40);
    }
  }
`