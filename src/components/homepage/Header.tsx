import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: #131314;
  width: 100%;
  color: #fff;
  gap: 1rem;

  .title {
    font-size: 1.5rem;
    align-self: flex-start;
    padding-left: 1rem;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="title">SIML.AI</div>
    </HeaderWrapper>
  );
};

export default Header;