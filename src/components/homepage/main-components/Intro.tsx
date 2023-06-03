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
    flex-row
  `}

  img {
    ${tw`
      w-[60%]
    `}
  }
`;

const Intro = () => {
  return (
    <IntroWrapper>
      <img src="assets/simlai/simlai-title.svg" alt="" />
      {/* <ImageSlider/>  */}
    </IntroWrapper>
  );
}

export default Intro;