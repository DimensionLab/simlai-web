import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
import DropdownMenu from "./main-components/mobile-components/DropdownMenu";
import { useEffect, useState } from "react";

const HeaderWrapper = styled.header`
  ${tw`
    w-full
    bg-[rgba(13, 16, 27, 0.95)]
    z-30
    flex
  `}

  .all-container {
    ${tw`
      flex
      flex-row
      gap-x-2
      justify-between
      w-full
      px-3
      // py-14
      pb-4
      xl:py-0
      xl:pr-0
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
      a {
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
          // border-b-transparent
          hover:border-b-[#6B50FF]
          xl:py-4
          xl:pt-3
        `}
      }

      .button {
        ${tw`
          bg-[#6B50FF]
          px-6
          h-full
          py-2
          text-white
          font-bold
          flex
          items-center
        `}
      }
    }
  }
`;

interface HeaderProps  {
  open: boolean;
  onClose: () => void;
  whichSubpage: string;
}

const Header = (props: HeaderProps) => {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;

      if (show) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper className="sticky top-0 left-0">
      <div className={`all-container ${isScrolled ? `pt-4` : `pt-14`}`}>
        <div className="logo">
          <a href="../">
            <img src="/assets/simlai/simlai-logo.svg" alt="" />
          </a>
        </div>
        <div className="right-side">
          <a href="https://platform.siml.ai/">
            <div className="text">LOGIN</div>
          </a>
          <div className="hamburger-menu" onClick={props.onClose}>
            <img src="/assets/simlai/hamburger-menu.svg" alt="" />
          </div>
        </div>
        <div className="bar w-full justify-end">
          <Link href={"../#features"}>FEATURES</Link>
          <Link href={"../#model-engineer"}>MODEL ENGINEER</Link>
          <Link href={"../#simulation-studio"}>SIMULATION STUDIO</Link>
          <a href={"https://docs.siml.ai"}>DOCS</a>
          <Link href={"/pricing"}>
            <a className={`${props.whichSubpage === "pricing" ? `text-white` : ``}`}>PRICING</a>
          </Link>
          {/* <Link href={""}>CAREERS</Link> */}
          {/* <a>CAREERS</a> */}
          <Link href={"../blog"}>
            <a id="last-link" className={`${props.whichSubpage === "blog" ? `border-2 border-b-[#6B50FF] text-white` : ``}`}>BLOG</a>
          </Link>
          <a className="button" href="https://platform.siml.ai/">LOGIN</a>
        </div>
        {/* <DropdownMenu open={props.open} onClose={props.onClose}/> */}
      </div>
    </HeaderWrapper>
  );
};

export default Header;