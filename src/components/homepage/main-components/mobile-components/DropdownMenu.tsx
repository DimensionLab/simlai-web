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
    h-[100vh]
    // left-0
    // top-0
  `}

  .container {
    ${tw`
      px-3
      py-14
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
          // gap-x-2
        `}
        button {
          ${tw`
            bg-[#6B50FF]
            px-4
            py-2
            text-white
            font-black
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
      `}
      .text-links {
        ${tw`
          flex
          flex-col
          w-full
          text-lg
          font-bold
          text-[#989BA7]
        `}
      }
      .socials {
        ${tw`
          flex
          flex-row
          gap-x-4
          w-full
          h-full
          my-6
          px-10
          justify-between
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
      .tos-privacy {}
      .copyright {}
    }
  }
`;

const DropdownMenu = (props: DropdownProps ) => {
  const { open, onClose } = props;
  return (
    <DropdownMenuWrapper style={{display: open ? 'block' : 'none'}}>
      <div className="container">
        <div className="header">
          <div className="logo-title">
            <img src="assets/simlai/simlai-logo.svg" alt="simlai logo" id="logo"/>
            <img src="assets/simlai/simlai-title.svg" alt="simlai brand name" id="title"/>
          </div>
          <div className="join-close">
            <button>JOIN</button>
            <img src="assets/simlai/close-dropdown.svg" alt="" id="close-btn" onClick={props.onClose}/>
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
            <Link href={"/pricing"}>
              <a onClick={(e) => { props.onClose(); }}>PRICING</a>
            </Link>
            <Link href={""}>
              <a onClick={(e) => { props.onClose(); }}>CAREERS</a>
            </Link>
            <Link href={"../blog"}>
              <a id="last-link" onClick={(e) => { props.onClose(); }}>BLOG</a>
            </Link>
          </div>
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
              <a href="https://www.linkedin.com/company/dimensionlab">
                <img src="assets/simlai/li-logo.svg" alt="" />
              </a>
            </div>
            <div className="medium-container">
              <a href="">
                <img src="assets/simlai/medium-logo.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="tos-privacy"></div>
          <div className="copyright"></div>
        </div>
      </div>
    </DropdownMenuWrapper>
  );
}

export default DropdownMenu;