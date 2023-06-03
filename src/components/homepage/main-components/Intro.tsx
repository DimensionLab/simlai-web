import styled from "styled-components";
import tw from "twin.macro";

const IntroWrapper = styled.div`
  ${tw`
    w-full
    flex
    justify-center
  `}
`;

const Intro = () => {
  return (
    <IntroWrapper>
      <img src="assets/simlai/simlai-title.svg" alt="" />
    </IntroWrapper>
  );
}

export default Intro;