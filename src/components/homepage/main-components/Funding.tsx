import styled from "styled-components";
import tw from "twin.macro";

const FundingWrapper = styled.div`
  ${tw`
    w-full
    px-4
    my-5
  `}
  
  .container {
    ${tw`
    flex
    flex-col
    gap-y-10
    py-24
    bg-[linear-gradient(90deg, #C063F9 0%, #59137D 100%)]
    rounded-xl
    w-full
    px-4
  `}
    .title {
      ${tw`
        font-black
        text-4xl
        xl:text-7xl
      `}
    }
  
    .subtitle {
      ${tw`
        text-xl
        w-[90%]
        xl:text-2xl
      `}
    }
  
    .btn {
      ${tw`
        flex
        w-full
        xl:mt-4
      `}
  
      button {
        ${tw`
          flex
          text-lg
          border
          rounded
          px-6
          py-3
          text-center
          xl:text-2xl
        `}
      }
    }
  }
`;

const Funding = () => {
  return (
    <FundingWrapper>
      <div className="container">
        <div className="title">Interested <br/> in funding us?</div>
        <div className="subtitle">Drop us an email <br/> and we&apos;ll send you our pitchdeck.</div>
        <div className="btn">
          <button><a href="mailto:hello@dimensionlab.org">CONTACT US</a></button>
        </div>
      </div>
    </FundingWrapper>
  );
}

export default Funding;