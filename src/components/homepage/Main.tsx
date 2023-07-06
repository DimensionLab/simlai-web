import styled from "styled-components";
import tw from "twin.macro"
import SignUp from "./main-components/SignUp";
import Features from "./main-components/Features";
import Product from "./main-components/Product";
import Message from "./main-components/Message";
import IntroParent from "./main-components/IntroParent";
import EngagementCardsParent from "./main-components/EngagementCardsParent";
import ShowcaseCard from "./main-components/cards/ShowcaseCard";

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

  const txtDataModelEngineer = [
    ["Datasets management", "Construct large datasets from classical simulation exports or physical sensors that collect precise measurements from real-world experiments."],
    ['Building blocks', "Quickly develop the model architecture for the simulators&apos;s desired capabilities and physical constraints. Customizable to the bone through code editor."],
    ["High performance computing, automated", "One-click A100 GPUs. Train and aggressively optimize learnable simulators in high-performance, GPU-powered cloud or HPC centers without the need to deal with the complexities of managing the cloud infrastructure."]
  ];

  const txtDataSimulationStudio = [
    ["Superfast", "<div>Simulations are computed by inferring trained neural network models, achieving speedups of <strong>1,000-100,000x</strong> compared to classical simulation software running on GPUs.</div>"],
    ['Interactive "in-situ" visualization', "The time it takes to compute one timestep even of highly irregular simulation domain is in low tens of milliseconds, resulting in real-time visualization of simulating physical phenomena."],
    ["Unreal rendering performance", "High-fidelity visualization rendering is achieved by leveraging the powerful Unreal Engine under the hood."]
  ];

  return (
    <MainWrapper style={ {display: props.open ? 'none' : 'flex'} }>
      <div className="width-limited">
        <IntroParent/>
        <SignUp/>
        <Features/>
        <Product/>
        <ShowcaseCard
          imgPath={"/assets/simlai/model-engineer.png"}
          title={"Model Engineer"}
          subtitle={"Train and optimize extremely fast physics simulators using deep learning techniques through web-based Model Engineer application."}
          txtData={txtDataModelEngineer}
        />
        <ShowcaseCard 
          imgPath={"/assets/simlai/simulation-studio-image.png"} 
          title={"Simulation Studio"} 
          subtitle={"Leverage trained AI simulator models for solving engineering and scientific problems, by constructing interactive, physics and data-driven digital twins."} 
          txtData={txtDataSimulationStudio}        
        />
      </div>
      <div className="not-width-limited">
        <Message/>
      </div>
      <EngagementCardsParent/>
    </MainWrapper>
  );
};

export default Main;