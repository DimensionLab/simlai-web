import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // padding: 2rem 0.5rem 2rem 0.5rem;
  background-color: #131314;
  // width: 100%;
  color: #fff;
  gap: 1rem;
  text-align: center;

  .copyright-socials {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: center;
    gap: 0.5rem;

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
      align-self: center;
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