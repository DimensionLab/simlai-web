import styled from "styled-components";
import tw from "twin.macro";
// import ImageSlider from "./intro-components/Slider";

const IntroWrapper = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    self-start
    px-3
    py-5
    flex
    flex-col
    gap-y-10
  `}

  img {
    ${tw`
      w-[60%]
    `}
  }

  .slider {
    ${tw`
      flex
      flex-col
      w-full
    `}

    img {
      ${tw`
        w-full
      `}
    }
    .buttons {
      ${tw`
        flex
        flex-row
        gap-x-2
        justify-center
      `}
      img{
        ${tw`
          w-3
        `}
      }
    }
  }
`;

const Intro = () => {
  const pics = 8;

  return (
    <IntroWrapper>
      <img src="assets/simlai/simlai-title.svg" alt="" />
      {/* <ImageSlider/>  */}
      <div className="slider">
        <img src="assets/simlai/intro-slider-images/image1.svg" alt="" />
        <div className="buttons">
          {Array.from({ length: pics }).map((_, index) => (
          <img key={index} src="assets/simlai/intro-slider-images/unfocused-point.svg"/>
          ))}
        </div>
      </div>
    </IntroWrapper>
  );
}

export default Intro;