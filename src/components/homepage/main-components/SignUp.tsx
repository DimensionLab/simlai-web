import styled from "styled-components";
import tw from "twin.macro";

const SignUpWrapper = styled.div`
  ${tw`
    flex
    flex-col
    gap-y-6
    overflow-hidden
    break-words
    xl:hidden
  `}

  .title {
    ${tw`
      text-3xl
      font-black
      break-normal
      px-4
    `}
  }

  .subtitle {
    ${tw`
      text-xl
      px-4
      text-[#B4B6C3]
      break-normal
      font-normal
    `}
  }

  .signup-container {
    ${tw`
      px-4
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
        md:w-3/4
        lg:w-3/4
        xl:w-full
        justify-between
        gap-x-2
      `}

      input {
        ${tw`
          w-3/4
          bg-[#373A45]
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
          w-1/4
        `}
      }
    }
  }
`;

const SignUp = () => {
  return (
    <SignUpWrapper>
      <div className="title">Tame the physics <br/> of your projects in hours!</div>
      <div className="subtitle">SIML.ai is a software platform for working with high-performance AI-based numerical simulators.</div>
      <div className="signup-container">
        <div className="label">Join private alpha waitlist</div>
        <div className="entry-container">
          <input type="email" name="" id="" placeholder="your@email.com"/>
          <button>Join</button>
        </div>
      </div>
    </SignUpWrapper>
  );
}

export default SignUp;