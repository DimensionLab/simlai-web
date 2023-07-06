import styled from "styled-components";
import tw from "twin.macro"
import SignUp from "./main-components/SignUp";
import Features from "./main-components/Features";
import Product from "./main-components/Product";
import ModelEngineer from "./main-components/ModelEngineer";
import SimulationStudio from "./main-components/SimulationStudio";
import Message from "./main-components/Message";
import IntroParent from "./main-components/IntroParent";
import EngagementCardsParent from "./main-components/EngagementCardsParent";

const MainWrapper = styled.main`
  ${tw`
    w-full
    flex
    flex-col
    items-center
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
`;

interface MainProps {
  open: boolean;
}

const Main = (props: MainProps) => {
  return (
    <MainWrapper style={ {display: props.open ? 'none' : 'flex'} }>
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
      <EngagementCardsParent/>
    </MainWrapper>
  );
};

export default Main;