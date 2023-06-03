import styled from 'styled-components';
import tw from 'twin.macro';

const FooterWrapper = styled.footer`
  ${tw`
    flex
    flex-col
    bg-[#222530]
    w-full
    px-8
    mt-4
    py-10
  `}

  .header-siml {
    ${tw`
      flex
      flex-row
      gap-x-4
    `}
    
    #logo {
      ${tw`
        w-6
      `}
    }
    #text {
      ${tw`
        w-20
      `}
    }
  }

  .socials {
    ${tw`
      flex
      flex-row
      gap-x-6
      w-full
      h-full
      mt-6
      mb-6
    `}

    a {
      img {
        ${tw`
          w-6
          aspect-auto
        `}
      }
    }
  }

  .links {
    ${tw`
      flex
      flex-col
      gap-y-8
    `}
    .product {
      ${tw`
        flex
        flex-col
        gap-y-2
      `}
      .title-product {
        ${tw`
          text-sm
          text-[#61646F]
        `}
      }
      .items-product {
        ${tw`
          flex
          flex-col
        `}
      }
    }
    .company {
      ${tw`
        flex
        flex-col
        gap-y-2
      `}
      .title-company {
        ${tw`
          text-sm
          text-[#61646F]
        `}
      }
      .items-company {
        ${tw`
          flex
          flex-col
        `}
      }
    }

    .legal {
      ${tw`
        flex
        flex-row
        gap-x-6
        my-6
      `}
    }
  }

  .copyright {
    ${tw`
      text-[#61646F]
      text-sm
    `}
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="header-siml">
        <img src="assets/simlai/simlai-logo.svg" alt="" id='logo'/>
        <img src="assets/simlai/simlai-title.svg" alt="" id='text'/>
      </div>
      <div className="socials">
        <div className="socials">
          <div className="twitter-container">
            <a href="https://twitter.com/siml_ai">
              <img src="assets/facebook-logo.svg" alt="" />
            </a>
          </div>
          <div className="facebook-container">
            <a href="https://www.facebook.com/learnedsimulators/">
              <img src="assets/twitter-logo.svg" alt="" />
            </a>
          </div>
          <div className="instagram-container">
            <a href="">
              <img src="assets/simlai/ig-logo.svg" alt="" />
            </a>
          </div>
          <div className="linkedin-container">
            <a href="asset">
              <img src="assets/simlai/li-logo.svg" alt="" />
            </a>
          </div>
          <div className="medium-container">
            <a href="">
              <img src="assets/simlai/medium-logo.svg" alt="" />
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
            <a href="https://www.siml.ai/terms-and-conditions">Careers</a>
            <a href="">Contact</a>
            <a href="https://web-git-main-dimensionlab.vercel.app/">DimensionLab</a>
          </div>
        </div>
        <div className="legal">
          <a href="https://www.siml.ai/terms-and-conditions">Terms & Conditions</a>
          <a href="https://www.dimensionlab.org/privacy-policy.html">Privacy Policy</a>
        </div>
      </div>
      <div className="copyright">©2021-2023 DimensionLab s.r.o., creators of SIML.ai</div>
    </FooterWrapper>
  );
};

export default Footer;