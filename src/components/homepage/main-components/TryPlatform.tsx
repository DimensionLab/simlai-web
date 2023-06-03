import styled from "styled-components";
import tw from "twin.macro";

const TryPlatformWrapper = styled.div`
  ${tw`
    my-5
    flex
    flex-col
    gap-y-10
    px-4
    pt-20
    pb-20
    mx-4
    bg-[linear-gradient(90deg, #6B50FF 0%, #C063F9 100%)]
    rounded-xl
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

  .signup-container {
    ${tw`
      flex
      flex-col
      gap-y-2
    `}

    .label {
      ${tw`
        text-sm
      `}
    }

    .entry-container {
      ${tw`
        flex
        flex-row
        w-full
        justify-between
        gap-x-2
      `}

      input {
        ${tw`
          w-3/4
          bg-white
          p-2
          text-lg
          rounded
          text-gray-500
        `}
      }

      button {
        ${tw`
          bg-[#6B50FF]
          p-4
          rounded
        `}
      }
    }
  }
`;

const TryPlatform = () => {
  return (
    <TryPlatformWrapper>
      <div className="title">Be the first <br/> to try the platform!</div>
      <div className="subtitle">Help us test the product, send feedback and get free access for a month after we launch!</div>
      <div className="signup-container">
        <div className="label">Join private alpha waitlist</div>
        <div className="entry-container">
          <input type="email" name="" id="" placeholder="your@email.com"/>
          <button>Join</button>
        </div>
      </div>
    </TryPlatformWrapper>
  );
}

export default TryPlatform;