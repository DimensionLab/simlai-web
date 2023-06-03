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
    bg-[#0D101B]
  `}

  .logo {
    img {
      ${tw`
        w-8
      `}
    }
  }

  .hamburger-menu {
    img {
      ${tw`
        w-8
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
    </HeaderWrapper>
  );
};

export default Header;