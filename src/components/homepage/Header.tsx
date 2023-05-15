import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  .blog {
    font-size: 1.5rem;
    padding-right: 4rem;

    a {
      text-decoration: none;
      color: white;

      &:hover {
        border-bottom: 2px solid white;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="title">SIML.AI</div>
      <div className="blog">
        <a href="/blog">Blog</a>
      </div>
    </HeaderWrapper>
  );
};

export default Header;