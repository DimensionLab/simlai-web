import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import dynamic from 'next/dynamic';

// Dynamic imports
const Intro = dynamic(() => import('./mobile-components/Intro'), { ssr: false });
const IntroDesktop = dynamic(() => import('./desktop-components/IntroDesktop'), { ssr: false });

const IntroParentWrapper = styled.div`
`;

const IntroParent = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Update the state depending on window width
    setIsDesktop(window.innerWidth >= 1280);
    // Listen for window resize
    window.addEventListener('resize', () => {
      setIsDesktop(window.innerWidth >= 1280);
    });
  }, []);

  return (
    <IntroParentWrapper className="max-w-[1400px]">
      {isDesktop ? (<IntroDesktop/>) : (<Intro/>)}
    </IntroParentWrapper>
  );
};

export default IntroParent;
