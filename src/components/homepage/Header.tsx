import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";

const HeaderWrapper = styled.header`
  ${tw`
    flex
    flex-row
    gap-x-2
    justify-between
    w-full
    px-3
    py-14
    xl:py-0
    xl:pr-0
    bg-[#0D101B]
    xl:pb-20
  `}

  .logo {
    ${tw`
      xl:flex
      xl:self-center
    `}
    img {
      ${tw`
        w-8
      `}
    }
  }

  .hamburger-menu {
    ${tw`
      xl:hidden
    `}
    img {
      ${tw`
        w-8
      `}
    }
  }

  .bar {
    ${tw`
      hidden
      xl:flex
      flex-row
      gap-x-4
      items-center
      text-lg
      text-gray-400
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
        px-10
        py-4
        text-white
      `}
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logo">
        <img src="assets/simlai/simlai-logo.svg" alt="" />
      </div>
      <div className="hamburger-menu">
        <img src="assets/simlai/hamburger-menu.svg" alt="" />
      </div>
      <div className="bar">
        <Link href={""}>FEATURES</Link>
        <Link href={""}>MODEL ENGINEER</Link>
        <Link href={""}>SIMULATION STUDIO</Link>
        <Link href={""}>INVESTORS</Link>
        <Link href={""}>CAREERS</Link>
        <Link href={""}>
          <a id="last-link">BLOG</a>
        </Link>
        <button>JOIN</button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;