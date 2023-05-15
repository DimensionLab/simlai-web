import styled from "styled-components";

const IntroTextWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color: #0D101B;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
    padding: 3rem 1rem 3rem 1rem;
    text-align: center;
    gap: 1rem;
    min-height: 30vh;
    justify-content: center;

    .title {
      font-size: 2rem;
      font-weight: 700;

      @media (min-width: 768px) {
        font-size: 2.5rem;
      }

      @media (min-width: 1024px) {
        font-size: 3.5rem;
      }
    }
    .subtitle {
      font-size: 1rem;

      @media (min-width: 768px) {
        font-size: 1.2rem;
      }

      @media (min-width: 1024px) {
        font-size: 1.5rem;
      }
    }
  }
`;

const Main = () => {
  return (
    <IntroTextWrapper>
      <div className="container">
        <div className="title">Welcome to the SIML.ai blog!</div>
        <div className="subtitle">You can learn about our product, development and mission in our blogposts!</div>
      </div>
    </IntroTextWrapper>
  );
};

export default Main;