import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
import DropdownMenu from "./main-components/mobile-components/DropdownMenu";

const HeaderWrapper = styled.header`
  ${tw`
    w-full
    bg-[rgba(13, 16, 27, 0.95)]
  `}

  .container {
    ${tw`
      flex
      flex-row
      gap-x-2
      justify-between
      w-full
      px-3
      // py-14
      py-4
      xl:py-0
      xl:pr-0
      xl:pb-20
    `}

    .logo {
      ${tw`
        xl:flex
        xl:self-center
        flex
        self-center
      `}
      img {
        ${tw`
          w-8
        `}
      }
    }
    .right-side {
      ${tw`
        flex
        gap-x-[18px]
      `}
      button {
        ${tw`
          text-lg
          flex
          bg-[#6B50FF]
          px-4
          py-2
          rounded
          xl:hidden
        `}

        .text {
          ${tw`
            font-bold
          `}
        }
      }
      .hamburger-menu {
        ${tw`
          xl:hidden
          flex
          // self-center
        `}
        img {
          ${tw`
            w-8
          `}
        }
      }
    }

    .bar {
      ${tw`
        hidden
        xl:flex
        flex-row
        gap-x-4
        items-center
        text-sm
        text-gray-400
        font-bold
      `}

      #last-link {
        ${tw`
          mr-10
        `}
      }

      a {
        ${tw`
          hover:text-white
          duration-300
          border-2
          border-transparent
          hover:border-b-[#6B50FF]
          xl:py-4
          xl:pt-3
        `}
      }

      button {
        ${tw`
          bg-[#6B50FF]
          px-6
          h-full
          py-2
          text-white
          font-bold
        `}
      }
    }
  }
`;

interface HeaderProps  {
  open: boolean;
  onClose: () => void;
}

const Header = (props: HeaderProps) => {
  return (
    <HeaderWrapper className="sticky top-0 left-0">
      <div className="container">
        <div className="logo">
          <img src="/assets/simlai/simlai-logo.svg" alt="" />
        </div>
        <div className="right-side">
          <button>
            <div className="text">JOIN</div>
          </button>
          <div className="hamburger-menu" onClick={props.onClose}>
            <img src="/assets/simlai/hamburger-menu.svg" alt="" />
          </div>
        </div>
        <div className="bar">
          <Link href={"../#features"}>FEATURES</Link>
          <Link href={"../#model-engineer"}>MODEL ENGINEER</Link>
          <Link href={"../#simulation-studio"}>SIMULATION STUDIO</Link>
          <Link href={"/pricing"}>PRICING</Link>
          <Link href={""}>CAREERS</Link>
          {/* Link is client-side navigation, when I use <a> instead, it request specific page from server -> refreshes (kind of solves missing blok property) */}
          {/* <Link href={"../blog"}> */}
            {/* <a id="last-link">BLOG</a> */}
          <a href="../blog" id="last-link">BLOG</a>
          {/* </Link> */}
          <button>JOIN</button>
        </div>
        {/* <DropdownMenu open={props.open} onClose={props.onClose}/> */}
      </div>
    </HeaderWrapper>
  );
};

export default Header;