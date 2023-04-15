import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: black;
    color: #fff;
    font-family: Arial, sans-serif;

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
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
};

export default Layout;