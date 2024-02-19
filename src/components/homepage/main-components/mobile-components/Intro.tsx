import styled from "styled-components";
import tw from "twin.macro";
import Slider from "../intro-components/Slider";

const IntroWrapper = styled.div<{children: any}>`
  ${tw`
    w-full
    flex
    justify-start
    self-start
    // px-3
    py-5
    flex-col
    gap-y-10
    pt-14
  `}

  .headline-logo {
    ${tw`
      xl:flex
      xl:flex-row
    `}

    #logo-picture {
      ${tw`
        hidden
        xl:flex
        w-32
      `}  
    }

    img {
      ${tw`
        w-[60%]
        px-4
  
        xl:w-96
      `}
    }
  }

  .slider {
    ${tw`
      flex
      flex-col
      w-full
      items-center
    `}

    img {
      ${tw`
        w-[96rem]
      `}
    }
    .buttons {
      ${tw`
        flex
        flex-row
        gap-x-2
      `}
      img{
        ${tw`
          w-2
        `}
      }
    }
  }
`;

const Intro = () => {
  const pics = 8;

  return (
    <IntroWrapper>
      <div className="headline-logo">
        <img src="assets/simlai/simlai-logo.svg" alt="siml.ai logo" id="logo-picture"/>
        <img src="assets/simlai/simlai-title.svg" alt="siml.ai title" />
      </div>
      <Slider/>
      {/* <div className="slider">
        <img src="assets/simlai/intro-slider-images/image1.svg" alt="" />
        <div className="buttons">
          {Array.from({ length: pics }).map((_, index) => (
          <img key={index} src="assets/simlai/intro-slider-images/unfocused-point.svg"/>
          ))}
        </div>
      </div> */}
    </IntroWrapper>
  );
}

export default Intro;