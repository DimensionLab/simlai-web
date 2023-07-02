import styled from "styled-components";
import tw from "twin.macro";

const ProductWrapper = styled.div`
  ${tw`
    flex
    flex-row
    gap-y-16
    // items-center
    px-4
    mb-24
    w-full
    // justify-between
    gap-x-8
    xl:my-44
  `}
  
  .leftside {
    ${tw`
      xl:w-1/2
      w-full
      flex
      items-start
      xl:justify-end
    `}

    .items {
      ${tw`
        flex
        flex-col
        gap-y-12
        justify-center
        // w-full
        items-center
        xl:w-2/3
      `}
      .header {
        ${tw`
          flex
          flex-row
          items-end
          gap-x-6
          w-full
          // justify-center
        `}
    
        #logo {
          ${tw`
            w-28
          `}
        }
    
        #title {
          ${tw`
            w-64
          `}
        }
      }
    
      .description {
        ${tw`
          xl:text-5xl
          text-4xl
          font-thin
          w-full
        `}
      }
    }
  }

  .extensive-text {
    ${tw`
      max-xl:hidden
      w-1/2
      flex
      // justify-center
    `}

    .text {
      ${tw`
        text-2xl
        w-[55%]
      `}

      strong {
        ${tw`
          font-normal
          text-[#8B7CFF]
        `}
      }
    }
  }
`;

const Product = () => {
  return (
    <ProductWrapper>
      <div className="leftside">
        <div className="items">
          <div className="header">
            <img src="assets/simlai/simlai-logo.svg" id="logo" alt="" />
            <img src="assets/simlai/simlai-title.svg" id="title" alt="" />
          </div>
          <div className="description">
            Software platform <br/> for high-performance <br/> AI-based numerical simulators.
          </div>
        </div>
        </div>
      <div className="extensive-text">
        {/* change href="" for 'DimensionLab below to actual production URL */}
        <div className="text">
          Vast majority of technologies in the world come to life through months or years of extensive simulation during their development. <br/> <br/>
          High-performance computing, parallel processing and GPUs helped push the computation time from months to weeks. With the help of applied machine learning, we are seeing a reduction from weeks to days. We think that&apos;s not enough. <br/> <br/>
          At <strong><a href="https://dimensionlab.org">DimensionLab</a></strong>, we are building tools for engineers and researchers to tame the physics of their projects in hours. Collectively, they make up a cohesive platform we call SIML.ai. <br/> <br/>
          Under the hood, SIML.ai consists of two parts - <strong><a href="#model-engineer">Model Engineer</a></strong> and <strong><a href="#simulation-studio">Simulation Studio</a></strong>.
        </div>
      </div>
    </ProductWrapper>
  )
}

export default Product;