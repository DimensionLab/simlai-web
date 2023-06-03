import styled from "styled-components";
import tw from "twin.macro"
import Intro from "./main-components/Intro";
import SignUp from "./main-components/SignUp";

const MainWrapper = styled.main`
  ${tw`
    text-3xl
    container
    bg-[#0D101B]
    w-full
  `}
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  justify-items: center;
  min-height: 90vh;
`;

const Main = () => {
  return (
    <MainWrapper>
      <Intro/>
      <SignUp/>
    </MainWrapper>
  );
};

export default Main;