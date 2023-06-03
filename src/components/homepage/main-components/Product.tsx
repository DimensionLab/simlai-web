import styled from "styled-components";
import tw from "twin.macro";

const ProductWrapper = styled.div`
  ${tw`
    flex
    flex-col
    gap-y-16
    items-center
    px-4
    mb-24
  `}

  .header {
    ${tw`
      flex
      flex-row
      items-end
      gap-x-6
      w-full
    `}

    #logo {
      ${tw`
        w-[4.5rem]
      `}
    }

    #title {}
  }

  .description {
    ${tw`
      text-4xl
      font-thin
    `}
  }
`;

const Product = () => {
  return (
    <ProductWrapper>
      <div className="header">
        <img src="assets/simlai/simlai-logo.svg" id="logo" alt="" />
        <img src="assets/simlai/simlai-title.svg" id="title" alt="" />
      </div>
      <div className="description">
        Software platform <br/> for high-performance <br/> AI-based numerical simulators.
      </div>
    </ProductWrapper>
  )
}

export default Product;