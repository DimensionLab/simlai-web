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
  const [knowWidth, setKnowWidth] = useState(false);

  useEffect(() => {
    // setKnowWidth(false);
    // Update the state depending on window width
    setIsDesktop(window.innerWidth >= 1280);
    // Listen for window resize
    window.addEventListener('resize', () => {
      setIsDesktop(window.innerWidth >= 1280);
    });
    setKnowWidth(true);
  }, []);

  return (
    <IntroParentWrapper>
      {knowWidth ? (
        <>
          {isDesktop ? (<IntroDesktop/>) : (<Intro/>)}
        </>
      ) : (
        <div className="w-full flex text-center h-60 items-center justify-center">
          <img src="/assets/simlai/loading.gif" alt="" />
        </div>
      )}
    </IntroParentWrapper>
  );
};

export default IntroParent;
