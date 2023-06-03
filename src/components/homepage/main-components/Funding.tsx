import styled from "styled-components";
import tw from "twin.macro";

const FundingWrapper = styled.div`
  ${tw`
    w-full
    px-4
  `}
  
  .container {
    ${tw`
    flex
    flex-col
    gap-y-10
    pt-20
    pb-20
    bg-[linear-gradient(90deg, #C063F9 0%, #59137D 100%)]
    rounded-xl
    w-full
    px-4
  `}
    .title {
      ${tw`
        font-black
        text-4xl
      `}
    }
  
    .subtitle {
      ${tw`
        text-xl
        w-[90%]
      `}
    }
  
    .btn {
      ${tw`
        flex
        w-full
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
        <div className="subtitle">Drop us an email <br/> and we'll send you our pitchdeck.</div>
        <div className="btn">
          <button>CONTACT US</button>
        </div>
      </div>
    </FundingWrapper>
  );
}

export default Funding;