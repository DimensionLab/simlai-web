import Image from "next/image";
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
  }

  .relative, .visual-editor-img {
    background: linear-gradient(180deg, #8B7CFF 0%, #6B50FF 100%);
    padding: 6px;
    border-radius: 10px;
    display: flex;
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
          <div className="bg-[#6B50FF] w-full rounded-lg px-4 py-3 text-center hover:scale-105 duration-300">
            <a href="https://platform.siml.ai/" target="_blank">
              <div className="font-bold text-2xl">Try out the platform now!</div>
            </a>
          </div>
          <div className="-mt-6 flex flex-row gap-x-2">
            <a href="https://www.producthunt.com/products/siml-ai?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-siml&#0045;ai" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=555488&theme=dark" alt="Siml&#0046;ai - Software&#0032;platform&#0032;for&#0032;AI&#0045;driven&#0032;physics&#0032;simulations | Product Hunt" style={{width: "250px", height: "54px"}} width="250" height="54" /></a>
            <a href="https://theresanaiforthat.com/ai/siml-ai/?ref=embed" target="_blank"><img style={{width: "250px", height: "54px"}} src="https://media.theresanaiforthat.com/featured3.png" /></a>
          </div>
        </div>
        <div className="right-side">
          <div className="relative">
            <Image src="/assets/simlai/simulation-studio-image.png" alt="model engineer screenshot" className="absolute" id="cover-img" width={960} height={640}/>
            <div className="absolute -left-[7%] -bottom-[20%] visual-editor-img">
              <Image src="/assets/simlai/model_engineer_cover_image.png" alt="screenshot from siml" className="absolute" width={300*1.56} height={300}/>
            </div>
            <div className="absolute left-[45%] -bottom-[20%]">
              <Image src="/assets/simlai/desktop-intro-pics/rotate2.png" alt="screenshot from siml" className="absolute" width={200*1.4} height={200}/>
            </div>
            <div className="absolute -right-[10%] -bottom-[10%]">
              <Image src="/assets/simlai/desktop-intro-pics/rotate1.png" alt="screenshot from siml" className="absolute" width={200*1.4} height={200}/>
            </div>
          </div>
        </div>
      </div>
    </IntroDesktopWrapper>
  );
}

export default IntroDesktop;