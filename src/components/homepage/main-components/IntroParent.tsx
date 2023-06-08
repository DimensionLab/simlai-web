import { useEffect, useState, FunctionComponent } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const IntroParentWrapper = styled.div`
  .loading {
    ${tw`
      w-full
      min-h-[50vh]
    `}
    img {
      ${tw`
        w-96
      `}
    }
  }
`;

const IntroParent = () => {
  const [width, setWidth] = useState(0);
  const [Component, setComponent] = useState<FunctionComponent | null>(null);
  const tailwindDesktopBreakpoint = 1280;

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (width > tailwindDesktopBreakpoint) {
      import("./desktop-components/IntroDesktop").then((module) => {
        setComponent(() => module.default);
      });
    } else {
      import("./mobile-components/Intro").then((module) => {
        setComponent(() => module.default);
      });
    }
  }, [width]);

  if (!Component) {
    // return (
    //   <IntroParentWrapper>
    //     <div className="loading">
    //       <img src="assets/simlai/simlai-logo.svg" alt=""/>
    //     </div>
    // </IntroParentWrapper>
    // )
    return null;
  }

  return (
    <IntroParentWrapper>
      <Component />
    </IntroParentWrapper>
  );
};

export default IntroParent;
