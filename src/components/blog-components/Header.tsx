import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 0;
  background-color: #131314;
  width: 100%;
  color: #fff;
  gap: 1rem;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }

  .home {
    font-size: 1.5rem;
    align-self: flex-start;
    padding-left: 1rem;

    a {
      text-decoration: none;
      color: white;

      &:hover {
        border-bottom: 2px solid white;
      }
    }
  }
  .contact {
    font-size: 1.5rem;

    @media (min-width: 768px) {
      padding-right: 4rem;
    }

    a {
      text-decoration: none;
      color: white;

      &:hover {
        border-bottom: 2px solid white;
      }
    }
  }

  .blog {
    font-size: 1.5rem;

    a {
      text-decoration: none;
      color: white;

      &:hover {
        border-bottom: 2px solid white;
      }
    }
  }
`;

const Header = ({ isArticle }: { isArticle: boolean }) => {
  return (
    <HeaderWrapper>
      <div className="home">
        <a href="../">Home</a>
      </div>
      {isArticle && (
        <div className="blog">
          <a href="../blog/">Blog</a>
        </div>
      )}
      <div className="contact">
        <a href="">Contact</a>
      </div>
    </HeaderWrapper>
  );
};

export default Header;