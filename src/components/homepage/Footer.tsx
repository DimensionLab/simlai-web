import Link from 'next/link';
import styled from 'styled-components';
import tw from 'twin.macro';

const FooterWrapper = styled.footer`
  ${tw`
    w-full
    bg-[#222530]
    flex
    justify-center
    text-white
    pb-2
  `}

  .all-container {
      ${tw`
        flex
        flex-col
        w-full
        px-8
        mt-4
        py-10
      
        xl:grid
        xl:grid-cols-2
        xl:h-full
        xl:pb-12
        xl:px-12
        max-w-[84rem]
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
    
          xl:grid
          xl:grid-cols-2
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
              xl:w-full
            `}
          }
          .items-product {
            ${tw`
              flex
              flex-col
              xl:w-full
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
              xl:w-full
            `}
          }
          .items-company {
            ${tw`
              flex
              flex-col
              xl:w-full
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
  }
`;

interface FooterProps {
  open: boolean;
}

const Footer = (props: FooterProps) => {
  return (
    <FooterWrapper style={ {display: props.open ? 'none' : 'flex'} }>
      <div className="all-container">
        <div className="left">
          <div className="header-siml">
            <img src="/assets/simlai/simlai-logo.svg" alt="" id='logo'/>
            <img src="/assets/simlai/simlai-title.svg" alt="" id='text'/>
          </div>
          <div className="socials">
            <div className="socials">
              <div className="twitter-container">
                <a href="https://twitter.com/siml_ai">
                  <img src="/assets/twitter-logo.svg" alt="" />
                </a>
              </div>
              <div className="facebook-container">
                <a href="https://www.facebook.com/learnedsimulators/">
                  <img src="/assets/facebook-logo.svg" alt="" />
                </a>
              </div>
              <div className="instagram-container">
                {/* insert href="" with actual link to instagram when it'll exist */}
                <a>
                  <img src="/assets/simlai/ig-logo.svg" alt="" />
                </a>
              </div>
              <div className="linkedin-container">
                <a href="https://www.linkedin.com/company/dimensionlab">
                  <img src="/assets/simlai/li-logo.svg" alt="" />
                </a>
              </div>
              <div className="medium-container">
                {/* insert href="" with actual link to instagram when it'll exist */}
                <a>
                  <img src="/assets/simlai/medium-logo.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="links">
          <div className="product">
            <div className="title-product">Product</div>
            <div className="items-product">
              <Link href="../#features">Features</Link>
              <Link href="../#model-engineer">Model Engineer</Link>
              <Link href="../#simulation-studio">Simulation Studio</Link>
            </div>
          </div>
          <div className="company">
            <div className="title-company">Company</div>
            <div className="items-company">
              {/* insert href="" when carreers link will exist*/}
              {/* <a>Careers</a> */}
              <a href="mailto:hello@dimensionlab.org">Contact</a>
              {/* change to production website url */}
              <a href="https://dimensionlab.org">DimensionLab</a>
              <a href="https://www.siml.ai/terms-and-conditions">Terms & Conditions</a>
              <a href="https://www.dimensionlab.org/privacy-policy.html" className='pb-6'>Privacy Policy</a> 
            </div>
          </div>
        </div>
        <div className="copyright">©2021-2023 DimensionLab s.r.o., creators of SIML.ai</div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;