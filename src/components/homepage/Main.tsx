import styled from "styled-components";

const MainWrapper = styled.main`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  justify-items: center;
  min-height: 90vh;
`;

const Main = () => {
  return (
    <MainWrapper>
      {Array.from({ length: 4 }, (_, i) => (
        <div key={i}>Section {i + 1}</div>
      ))}
    </MainWrapper>
  );
};

export default Main;