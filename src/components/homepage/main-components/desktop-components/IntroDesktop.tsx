import styled from "styled-components";
import tw from "twin.macro";

const IntroDesktopWrapper = styled.div`
  ${tw`
    xl:my-12
  `}

  .all-container {
    ${tw`
      flex
      flex-row
      mb-20
      gap-x-44
      px-12
      // pl-12
    `}
    .left-side {
      ${tw`
        flex
        flex-col
        w-1/2
        gap-y-10
      `}
      .logo-title {
        ${tw`
          flex
          flex-row
          items-end
          gap-x-10
        `}
        
        #siml-logo {
          ${tw`
            w-20
          `}
        }
        #siml-title {
          ${tw`
            w-48
          `}
        }
      }
      .title {
        ${tw`
          font-bold
          text-5xl
        `}
      }
      .subtitle {
        ${tw`
          text-[#B4B6C3]
          text-xl
        `}
      }
      .join-waitlist {
        .label {
          ${tw`
            text-xs
            text-[#D0D2DF]
            pb-1
          `}
        }
        .email-button {
          ${tw`
            w-full
            flex
            justify-start
            gap-x-2
          `}
          input {
            ${tw`
              w-3/4
              px-[11px]
              py-[16px]
              bg-[#373A45]
              text-[#7C7F8B]
              text-[14px]
              w-[288px]
              h-[40px]
              rounded-[4px]
            `}
          }
          button {
            ${tw`
              bg-[#6B50FF]
              rounded-[4px]
              px-[11px]
              py-[16px]
              w-[66px]
              h-[40px]
              text-[14px]
              flex
              font-bold
              justify-center
            `}

            div {
              ${tw`
                flex
                self-center
              `}
            }
          }
        }
      }
    }
    .right-side {
      ${tw`
        w-1/2
      `}
      .container {
        ${tw`
          relative
        `}

        .static {
          ${tw`
            w-full
          `}
        }

        .rotate {
          ${tw`
            absolute
            bottom-0
          `}
        }

        .one {
          ${tw`
            w-[50%]
            left-[-3%]
            bottom-[-22%]
          `}
        }

        .two {
          ${tw`
            w-[40%]
            left-[30%]
            bottom-[-30%]
          `}
        }

        .three {
          ${tw`
            w-[50%]
            right-[2%]
            bottom-[-15%]
          `}
        }
      }
    }
  }
`;

const IntroDesktop = () => {
  return (
    <IntroDesktopWrapper>
      <div className="all-container">
        <div className="left-side">
          <div className="logo-title">
            <img src="assets/simlai/simlai-logo.svg" alt="" id="siml-logo"/>
            <img src="assets/simlai/simlai-title.svg" alt="" id="siml-title"/>
          </div>
          <div className="title">Tame the physics <br/>of your projects in hours!</div>
          <div className="subtitle">SIML.ai is a software platform for working <br/> with high-performance AI-based numerical simulators.</div>
          <div className="join-waitlist">
            <div className="label">Join private alpha waitlist</div>
            <div className="email-button">
              <input type="email" name="" id="" placeholder="your@email.com"/>
              <button>
                <div>JOIN</div>
              </button>
            </div>
          </div>
        </div>
        <div className="right-side">
          {/* this manual absolute-positioning is broken */}
          <div className="container">
            <img src="assets/simlai/desktop-intro-pics/static.svg" alt="" className="static"/>
            <img src="assets/simlai/desktop-intro-pics/rotate1.svg" alt="" className="rotate one"/>
            <img src="assets/simlai/desktop-intro-pics/rotate2.svg" alt="" className="rotate two"/>
            <img src="assets/simlai/desktop-intro-pics/rotate3.svg" alt="" className="rotate three"/>
          </div>
          {/* <img src="assets/simlai/desktop-intro-pics/image-composition.png" alt="" /> */}
        </div>
      </div>
    </IntroDesktopWrapper>
  );
}

export default IntroDesktop;