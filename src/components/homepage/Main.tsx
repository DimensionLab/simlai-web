import styled from "styled-components";
import tw from "twin.macro"
import Intro from "./main-components/Intro";
import SignUp from "./main-components/SignUp";
import Features from "./main-components/Features";
import Product from "./main-components/Product";
import ModelEngineer from "./main-components/ModelEngineer";
import SimulationStudio from "./main-components/SimulationStudio";
import Message from "./main-components/Message";
import TryPlatform from "./main-components/TryPlatform";
import Funding from "./main-components/Funding";

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
      <Features/>
      <Product/>
      <ModelEngineer/>
      <SimulationStudio/>
      <Message/>
      <TryPlatform/>
      <Funding/>
    </MainWrapper>
  );
};

export default Main;