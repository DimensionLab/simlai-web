import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Intro from "./mobile-components/Intro";
import IntroDesktop from "./desktop-components/IntroDesktop";

const IntroParentWrapper = styled.div`

`;

const IntroParent = () => {
  const [width, setWidth] = useState(0);
  const tailwindDesktopBreakpoint = 1280;

  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <IntroParentWrapper>
      {width > tailwindDesktopBreakpoint ? (<IntroDesktop/>) : (<Intro/>)}
    </IntroParentWrapper>
  )
}

export default IntroParent;