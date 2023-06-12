import styled from "styled-components";
import tw from "twin.macro"
import SignUp from "./main-components/SignUp";
import Features from "./main-components/Features";
import Product from "./main-components/Product";
import ModelEngineer from "./main-components/ModelEngineer";
import SimulationStudio from "./main-components/SimulationStudio";
import Message from "./main-components/Message";
import TryPlatform from "./main-components/TryPlatform";
import Funding from "./main-components/Funding";
import IntroParent from "./main-components/IntroParent";

const MainWrapper = styled.main`
  // .width-limitedd {
  //   ${tw`
  //     text-3xl
  //     container
  //     bg-[#0D101B]
  //     w-full
  // `}
  // }
  // display: grid;
  // grid-auto-flow: row;
  // align-items: center;
  // justify-items: center;
  // min-height: 90vh;

  ${tw`
    w-full
    flex
    flex-col
    items-center
    font-inter
  `}

  .width-limited {
    ${tw`
      container
    `}
  }

  .not-width-limited {
    ${tw`
      w-full
    `}
  }

  #try-funding {
    ${tw`
      xl:grid
      xl:grid-cols-2
      xl:my-52
    `}
  }

`;

const Main = () => {
  return (
    <MainWrapper>
      <div className="width-limited">
        <IntroParent/>
        <SignUp/>
        <Features/>
        <Product/>
        <ModelEngineer/>
        <SimulationStudio/>
      </div>
      <div className="not-width-limited">
        <Message/>
      </div>
      <div className="width-limited" id="try-funding">
        <TryPlatform/>
        <Funding/>
      </div>
    </MainWrapper>
  );
};

export default Main;