import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
import DropdownMenu from "./main-components/mobile-components/DropdownMenu";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const HeaderWrapper = styled.header<{ className: string, children: any }>`
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
        text-xs
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
  const [url, setUrl] = useState("");

  const router = useRouter();

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

  useEffect(() => {
    // @ts-ignore
    window._mfq = window._mfq || [];
    (function() {
      var mf = document.createElement("script");
      mf.type = "text/javascript"; mf.defer = true;
      mf.src = process.env.NEXT_PUBLIC_MOUSEFLOW_URL as string;
      document.getElementsByTagName("head")[0].appendChild(mf);
    })();
  })

  useEffect(() => {
    const url = window?.location?.href;

    if (url.endsWith("features")) {
      setUrl("features");
    }
    if (url.endsWith("model-engineer")) {
      setUrl("model-engineer");
    }
    if (url.endsWith("simulation-studio")) {
      setUrl("simulation-studio");
    }
  }, [router.asPath])

  return (
    <HeaderWrapper className="sticky top-0 left-0">
      <Head>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/26843925.js"></script>
      </Head>
      <div className={`all-container ${isScrolled ? `pt-4` : `pt-14`}`}>
        <div className="logo">
          <a href="../">
            <img src="/assets/simlai/simlai-logo.svg" alt="siml.ai logo" />
          </a>
        </div>
        <div className="right-side">
          <a href="https://platform.siml.ai/">
            <div className="text">LOGIN</div>
          </a>
          <div className="hamburger-menu" onClick={props.onClose}>
            <img src="/assets/simlai/hamburger-menu.svg" alt="hamburger menu icon" />
          </div>
        </div>
        <div className="bar w-full justify-end">
          <Link href={"../#features"}>
            <a className={`${url === "features" ? "text-white" : ""}`}>FEATURES</a>
          </Link>
          <Link href={"../#model-engineer"}>
            <a className={`${url === "model-engineer" ? "text-white" : ""}`}>MODEL ENGINEER</a>
          </Link>
          <Link href={"../#simulation-studio"}>
            <a className={`${url === "simulation-studio" ? "text-white" : ""}`}>SIMULATION STUDIO</a>
          </Link>
          <a href={"https://docs.siml.ai"} target="_blank">DOCS</a>
          <Link href={"/pricing"}>
            <a className={`${props.whichSubpage === "pricing" ? `text-white` : ``}`}>PRICING</a>
          </Link>
          {/* <Link href={""}>CAREERS</Link> */}
          {/* <a>CAREERS</a> */}
          <Link href={"../university"}>
            <a className={`${props.whichSubpage === "university" ? `text-white` : ``}`}>LEARN</a>
          </Link>
          <Link href={"../blog"}>
            <a className={`${props.whichSubpage === "blog" ? `border-2 border-b-[#6B50FF] text-white` : ``}`}>BLOG</a>
          </Link>
          <Link href={"https://meetings-eu1.hubspot.com/michal-bujnak"} target="_blank">
            <a id="last-link" target="_blank">BOOK A DEMO</a>
          </Link>
          <a className="button" href="https://platform.siml.ai/">LOGIN</a>
        </div>
        {/* <DropdownMenu open={props.open} onClose={props.onClose}/> */}
      </div>
    </HeaderWrapper>
  );
};

export default Header;