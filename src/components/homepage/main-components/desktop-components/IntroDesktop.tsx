import styled from "styled-components";
import tw from "twin.macro";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

const IntroDesktopWrapper = styled.div`
  ${tw`
    xl:my-12
    xl:pt-20
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
          text-4xl
        `}
      }
      .subtitle {
        ${tw`
          text-[#B4B6C3]
          text-xl
        `}
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
          background: linear-gradient(180deg, #8B7CFF 0%, #6B50FF 100%);
          padding: 4px;
          border-radius: 10px;
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
            left-[-7%]
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
            right-[0%]
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
            <img src="assets/simlai/simlai-logo.svg" alt="siml.ai logo" id="siml-logo"/>
            <img src="assets/simlai/simlai-title.svg" alt="siml.ai title" id="siml-title"/>
          </div>
          <div className="title">Tame the physics <br/>of your projects in hours!</div>
          <div className="subtitle">Siml.ai is a software platform for working <br/> with high-performance AI-based numerical simulators.</div>
          <div className="bg-[#6B50FF] w-full rounded-lg px-4 py-3 text-center">
            <a href="https://platform.siml.ai/" target="_blank">
              <div className="font-bold text-2xl">Try Our Platform!</div>
            </a>
          </div>
          <div className="-mt-6 flex flex-row gap-x-2">
            <a href="https://www.producthunt.com/products/siml-ai?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-siml&#0045;ai" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=555488&theme=dark" alt="Siml&#0046;ai - Software&#0032;platform&#0032;for&#0032;AI&#0045;driven&#0032;physics&#0032;simulations | Product Hunt" style={{width: "250px", height: "54px"}} width="250" height="54" /></a>
            <a href="https://theresanaiforthat.com/ai/siml-ai/?ref=embed" target="_blank"><img style={{width: "250px", height: "54px"}} src="https://media.theresanaiforthat.com/featured3.png" /></a>
          </div>
        </div>
        <div className="right-side">
          <div className="container">
            <img src="assets/simlai/model_engineer_cover_image.png" alt="model engineer screenshot" className="static"/>
            <img src="assets/simlai/desktop-intro-pics/rotate1.png" alt="screenshot from siml" className="rotate one"/>
            <img src="assets/simlai/desktop-intro-pics/rotate2.png" alt="screenshot from siml" className="rotate two"/>
            <img src="assets/simlai/desktop-intro-pics/rotate3.png" alt="screenshot from siml" className="rotate three"/>
          </div>
        </div>
      </div>
    </IntroDesktopWrapper>
  );
}

export default IntroDesktop;