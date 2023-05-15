import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0 4rem 0;
  background-color: #131314;
  width: 100%;
  color: #fff;
  gap: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  .copyright-socials {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: center;
    gap: 0.5rem;
    padding: 0 1rem 0 1rem;

    .copyright {
      display: flex;
      justify-self: center;
      font-size: 0.8rem;
      color: grey;
    }
    .socials {
      display: flex;
      flex-direction: row;
      column-gap: 0.5rem;
      width: 100%;
      justify-content: center;

      @media (min-width: 768px) {
        justify-content: flex-start;
      }

      img {
        width: 1.5rem;
      }
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 1rem 0 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .product {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .title-product {
        display: flex;
        color: grey;
      }
      .items-product {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: start;

        a {
          text-decoration: none;
          color: white;
        }
      }
    }

    .company {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .title-company {
        display: flex;
        color: grey;
      }
      .items-company {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;

        a {
          text-decoration: none;
          color: white;
        }
      }
    }

  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="copyright-socials">
        <div className="copyright">©2021-2023 DimensionLab s.r.o., creators of SIML.ai</div>
        <div className="socials">
          <div className="twitter-container">
            <a href="">
              <img src="assets/facebook-logo.svg" alt="" />
            </a>
          </div>
          <div className="facebook-container">
            <a href="">
              <img src="assets/twitter-logo.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="links">
        <div className="product">
          <div className="title-product">Product</div>
          <div className="items-product">
            <a href="">Features</a>
            <a href="">Model Engineer</a>
            <a href="">Simulation Studio</a>
          </div>
        </div>
        <div className="company">
          <div className="title-company">Company</div>
          <div className="items-company">
            <a href="">Terms & Conditions</a>
            <a href="">DimensionLab</a>
            <a href="">LinkedIn</a>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;