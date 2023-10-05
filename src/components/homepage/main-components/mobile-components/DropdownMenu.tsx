import Link from "next/link";
import styled, { StyledComponent } from "styled-components";
import tw from "twin.macro";

interface DropdownProps {
  open: boolean;
  onClose: () => void;
}

interface StyledDropdownProps {}

const DropdownMenuWrapper: StyledComponent<"div", any, StyledDropdownProps, never> = styled.div<StyledDropdownProps>`
  ${tw`
    // absolute
    bg-[#0D101B]
    w-full
    // h-[100vh]
    // left-0
    // top-0
    h-full
  `}

  .container {
    ${tw`
      px-3
      py-14
      flex
      flex-col
      h-full
      justify-between
    `}
    .header {
      ${tw`
        flex
        flex-row
        justify-between
        // pt-8
      `}
      .logo-title {
        ${tw`
          flex
          flex-row
          gap-x-4
        `}
        
        #logo {
          ${tw`
            w-8
          `}
        }
        #title {
          ${tw`
            w-24
          `}
        }
      }
      .join-close {
        ${tw`
          flex
          flex-row
          items-center
          gap-x-2.5
        `}
        button {
          ${tw`
            bg-[#6B50FF]
            px-4
            py-2
            text-white
            font-bold
            rounded
            text-lg
          `}
        }
        // #close-btn {
        //   &:hover {
        //     cursor: pointer;
        //   }
        // }
        //doesnt work for some reason
        img {
          ${tw`
            w-10
            h-full
            self-center
            flex
          `}
        }
      }
    }
    .content {
      ${tw`
        flex
        flex-col
        h-full
        pt-24
        px-6
        
      `}
      .text-links {
        ${tw`
          flex
          flex-col
          w-full
          text-xl
          font-bold
          text-[#989BA7]
          gap-y-6
        `}

        a {
          ${tw`
            hover:text-white
            duration-300
          `}
        }
      }
      .socials {
        ${tw`
          flex
          flex-row
          gap-x-4
          w-full
          h-full
          my-6
          pr-8
          justify-start
          gap-x-8
          py-12
        `}
    
        a {
          img {
            ${tw`
              w-8
              aspect-auto
            `}
          }
        }
      }
      .legal {
        ${tw`
          flex
          flex-row
          w-full
          // justify-center
          gap-x-6
          // pl-8
          pb-8
        `}
      }
      .copyright {
        ${tw`
          text-[#61646F]
          text-xs
          // text-center
          // pl-8
        `}
      }
    }
  }
`;

const DropdownMenu = (props: DropdownProps ) => {
  const { open, onClose } = props;
  return (
    <DropdownMenuWrapper style={{display: open ? 'flex' : 'none'}}>
      <div className="container">
        <div className="header">
          <div className="logo-title">
            <img src="/assets/simlai/simlai-logo.svg" alt="simlai logo" id="logo"/>
            <img src="/assets/simlai/simlai-title.svg" alt="simlai brand name" id="title"/>
          </div>
          <div className="join-close">
            <a href="https://platform.siml.ai/">
              <button>LOGIN</button>
            </a>
            <img src="/assets/simlai/close-dropdown.svg" alt="close button" id="close-btn" onClick={props.onClose}/>
          </div>
        </div>
        <div className="content">
          <div className="text-links">
            <Link href={"../#features"}>
              <a onClick={(e) => { props.onClose(); }}>FEATURES</a>
            </Link>
            <Link href={"../#model-engineer"}>
              <a onClick={(e) => { props.onClose(); }}>MODEL ENGINEER</a>
            </Link>
            <Link href={"../#simulation-studio"}>
              <a onClick={(e) => { props.onClose(); }}>SIMULATION STUDIO</a>
            </Link>
            <Link href={"https://docs.siml.ai"}>
              <a id="last-link" onClick={(e) => { props.onClose(); }}>DOCS</a>
            </Link>
            <Link href={"/pricing"}>
              <a onClick={(e) => { props.onClose(); }}>PRICING</a>
            </Link>
            {/* <Link href={""}>
              <a onClick={(e) => { props.onClose(); }}>CAREERS</a>
            </Link> */}
            <Link href={"../university"}>
              <a onClick={(e) => { props.onClose(); }}>LEARN</a>
            </Link>
            <Link href={"../blog"}>
              <a id="last-link" onClick={(e) => { props.onClose(); }}>BLOG</a>
            </Link>
            
          </div>
          <div className="socials">
            <div className="facebook-container">
              <a href="https://www.facebook.com/dl.simlai" target="_blank">
                <img src="/assets/facebook-logo.svg" alt="facebook logo" />
              </a>
            </div>
            <div className="twitter-container">
              <a href="https://twitter.com/siml_ai" target="_blank">
                <img src="/assets/twitter-logo.svg" alt="twitter logo" />
              </a>
            </div>
            {/* <div className="instagram-container">
              <a href="">
                <img src="/assets/simlai/ig-logo.svg" alt="" />
              </a>
            </div> */}
            <div className="linkedin-container">
              <a href="https://www.linkedin.com/company/dimensionlab" target="_blank">
                <img src="/assets/simlai/li-logo.svg" alt="linkedin logo" />
              </a>
            </div>
            {/* <div className="medium-container">
              <a href="">
                <img src="/assets/simlai/medium-logo.svg" alt="" />
              </a>
            </div> */}
            <div className="discord-container">
                <a href="https://discord.gg/UxQyC9PEqt" target='_blank'>
                  <img src="/assets/discord-logo.png" alt="discord logo" />
                </a>
              </div>
              <div className="reddit-container">
                <a href="https://www.reddit.com/r/simlai" target='_blank'>
                  <img src="/assets/reddit-logo.png" alt="reddit logo" className='rounded'/>
                </a>
              </div>
              <div className="instagram-container">
                <a href="https://www.instagram.com/siml.ai/" target='_blank'>
                  <img src="/assets/instagram-logo.png" alt="reddit logo" className='rounded bg-white p-1'/>
                </a>
              </div>
          </div>
          <div className="legal">
            <a href="https://www.dimensionlab.org/terms-and-conditions.html">Terms & Conditions</a>
            <a href="https://www.dimensionlab.org/privacy-policy.html">Privacy Policy</a>
          </div>
          <div className="copyright">©2021-{new Date().getFullYear()} DimensionLab, creators of Siml.ai</div>
        </div>
      </div>
    </DropdownMenuWrapper>
  );
}

export default DropdownMenu;