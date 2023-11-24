import React, { useCallback } from 'react';
import Particles from 'react-particles';
import styled, { createGlobalStyle } from 'styled-components';
import { loadSlim } from 'tsparticles-slim';
import tw from 'twin.macro';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    ${tw`
      bg-[#0D101B]
    `}
    color: #fff;
    font-family: Inter, sans-serif;

    display: grid;
    grid-auto-flow: row;
  }
`;

const LayoutWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-auto-flow: row;
  min-height: 100vh;

  align-items: center;
  justify-items: center;
  font-family: Inter, sans-serif;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  return (
    <>
      <GlobalStyle />
      <LayoutWrapper>{children}</LayoutWrapper>
      <Particles 
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                  background: {
                      color: {
                          value: "#0d48a10",
                      },
                  },
                  fpsLimit: 120,
                  interactivity: {
                      events: {
                          onClick: {
                              enable: true,
                              mode: "push",
                          },
                          onHover: {
                              enable: true,
                              mode: "repulse",
                          },
                          resize: true,
                      },
                      modes: {
                          push: {
                              quantity: 4,
                          },
                          repulse: {
                              distance: 200,
                              duration: 0.4,
                          },
                      },
                  },
                  particles: {
                      color: {
                          value: "#9b90d8",
                      },
                      links: {
                          color: "#6B50FF",
                          distance: 150,
                          enable: true,
                          opacity: 0.5,
                          width: 1,
                      },
                      move: {
                          direction: "none",
                          enable: true,
                          outModes: {
                              default: "bounce",
                          },
                          random: false,
                          speed: 6,
                          straight: false,
                      },
                      number: {
                          density: {
                              enable: true,
                              area: 800,
                          },
                          value: 120,
                      },
                      opacity: {
                          value: 0.5,
                      },
                      shape: {
                          type: "circle",
                      },
                      size: {
                          value: { min: 1, max: 5 },
                      },
                  },
                  detectRetina: true,
              }}
            />
    </>
  );
};

export default Layout;