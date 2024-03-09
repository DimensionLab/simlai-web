"use client";

import Image from "next/image";
import Link from "next/link";
import TrackingWrapper from "./tracking/TrackingWrapper";
import { useEffect, useState } from "react";
import HamburgerMenu from "./mobile/HamburgerMenu";

const menuItems = [
  {
    label: "FEATURES",
    href: "/#features"
  },
  {
    label: "MODEL ENGINEER",
    href: "/#model-engineer"
  },
  {
    label: "SIMULATION STUDIO",
    href: "/#simulation-studio"
  },
  {
    label: "DOCS",
    href: "https://docs.siml.ai"
  },
  {
    label: "PRICING",
    href: "/pricing"
  },
  {
    label: "LEARN",
    href: "/university"
  },
  {
    label: "BLOG",
    href: "/blog"
  },
  {
    label: "BOOK A DEMO",
    href: "https://meetings-eu1.hubspot.com/michal-bujnak"
  }
]

export default function Header() {
  const originUrl = window.location.origin;
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen])
  return (
    <div className="w-full px-4 sticky top-0 left-0 bg-darkBg z-30 xl:pr-0">
      <TrackingWrapper />
      <nav className="flex py-4 justify-between w-full xl:py-0">
        <Link href={originUrl + "/#"} className="flex">
          <Image src={"/assets/simlai/simlai-logo-header.svg"} alt="Siml.ai" width={23} height={23} />
        </Link>
        <div className="flex gap-x-4">
          <ul className="max-xl:hidden flex flex-row gap-x-4 items-center text-muted font-bold text-sm">
            { menuItems.map((item, index) => (
              <li key={index}>
                <Link  href={item.href.includes("https://") ? item.href : originUrl + item.href} replace target={item.href.includes("https://") ? "_blank" : ""}>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="https://platform.siml.ai" target="_blank">
            <button className="bg-btnPurple px-4 py-2 rounded font-bold">LOGIN</button>
          </Link>
          <button onClick={() => toggleMenu()} className="xl:hidden">
            <Image src="/assets/simlai/hamburger-menu.svg" alt="Menu" width={30} height={30} />
          </button>
        </div>
      </nav>
      <HamburgerMenu className={menuOpen ? 'flex' : 'hidden'} toggleMenu={toggleMenu}/>
    </div>
  )
}