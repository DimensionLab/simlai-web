import styled from "styled-components";
import tw from "twin.macro";

const FundingWrapper = styled.div`
  ${tw`
    w-full
    px-4
    my-5
    h-full
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
    max-sm:px-4
    px-10
    h-full
  `}
    .title {
      ${tw`
        font-bold
        text-4xl
        xl:text-6xl
      `}
    }
  
    .subtitle {
      ${tw`
        text-xl
        w-[90%]
        xl:text-2xl
        font-normal
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
          py-2
          text-center
          hover:bg-white
          hover:text-black
          duration-700
          font-bold
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