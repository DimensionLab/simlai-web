import styled from "styled-components";
import tw from "twin.macro";

const ProductWrapper = styled.div`
  
  .leftside {
    ${tw`
      // xl:w-1/2
      w-full
      flex
      items-start
      xl:justify-start
      // xl:pl-24
    `}

    .items {
      ${tw`
        flex
        flex-col
        gap-y-12
        justify-center
        // w-full
        items-center
        // xl:w-2/3
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
          xl:text-4xl
          xl:leading-[50px]
          text-3xl
          md:text-4xl
          font-thin
          w-full
        `}
      }
    }
  }

  .extensive-text {
    ${tw`
      max-lg:hidden
      // w-1/2
      flex
      // justify-center
      w-full
      justify-end
    `}

    .text {
      ${tw`
        text-xl
        // w-[55%]
        w-full
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
    <ProductWrapper className="flex w-full items-center justify-center">
      <div className="flex max-w-5xl flex-col px-4 w-full lg:flex-row pb-16 lg:pb-24">
        <div className="leftside">
          <div className="items">
            <div className="header">
              <img src="assets/simlai/simlai-logo.svg" id="logo" alt="siml.ai logo" />
              <img src="assets/simlai/simlai-title.svg" id="title" alt="siml.ai title" />
            </div>
            <div className="description">
              Software platform <br/> for high-performance <br/> AI-based numerical simulators.
            </div>
          </div>
          </div>
        <div className="extensive-text">
          <div className="text">
            Vast majority of technologies in the world come to life through months or years of extensive simulation during their development. <br/> <br/>
            High-performance computing, parallel processing and GPUs helped push the computation time from months to weeks. With the help of applied machine learning, we are seeing a reduction from weeks to days. We think that&apos;s not enough. <br/> <br/>
            At <strong><a href="https://dimensionlab.org">DimensionLab</a></strong>, we are building tools for engineers and researchers to tame the physics of their projects in hours. Collectively, they make up a cohesive platform we call Siml.ai. <br/> <br/>
            Under the hood, Siml.ai consists of two parts - <strong><a href="#model-engineer">Model Engineer</a></strong> and <strong><a href="#simulation-studio">Simulation Studio</a></strong>.
          </div>
        </div>
      </div>
    </ProductWrapper>
  )
}

export default Product;