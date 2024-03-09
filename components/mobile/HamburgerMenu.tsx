"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import SocialsRow from "../SocialsRow";
import { getOriginUrl } from "@/lib/environment";

const linksData = [
  {
    name: "FEATURES",
    href: getOriginUrl() + "/#features",
  },
  {
    name: "MODEL ENGINEER",
    href: getOriginUrl() + "#model-engineer",
  },
  {
    name: "SIMULATION STUDIO",
    href: getOriginUrl() + "#simulation-studio",
  },
  {
    name: "DOCS",
    href: "https://docs.siml.ai",
  },
  {
    name: "PRICING",
    href: getOriginUrl() + "/pricing",
  },
  {
    name: "LEARN",
    href: getOriginUrl() + "/university",
  },
  {
    name: "BLOG",
    href: getOriginUrl() + "/blog",
  },
  {
    name: "BOOK A DEMO",
    href: "https://meetings-eu1.hubspot.com/michal-bujnak",
  }
];

export default function HamburgerMenu( { className, toggleMenu }: { className: string, toggleMenu: () => void } ){
  return (
    <div className={cn(`absolute top-0 left-0 flex h-screen w-screen flex-col justify-between bg-darkBg ${className}`)}>
      <section className="flex flex-col gap-y-12">
        <div className="w-full px-4">
          <nav className="flex py-4 justify-between w-full">
            <Link href={"#"} className="flex">
              <Image src={"/assets/simlai/header-nav-logo.svg"} alt="Siml.ai" width={120} height={50} />
            </Link>
            <div className="flex gap-x-4">
              <Link href="https://platform.siml.ai" target="_blank">
                <button className="bg-btnPurple px-4 py-2 rounded font-bold">LOGIN</button>
              </Link>
              <button onClick={() => toggleMenu()}>
                <Image src="/assets/simlai/hamburger-menu.svg" alt="Menu" width={30} height={30} />
              </button>
            </div>
          </nav>
        </div>
        <ul className="w-full px-10 flex flex-col gap-y-6">
          {linksData.map((link, index) => (
            <li key={index} className="font-bold text-xl text-muted hover:text-white duration-300">
              <Link href={link.href} onClick={() => toggleMenu()}>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-10">
          <SocialsRow />
        </div>
      </section>
      <footer className="px-10 mb-6">
        <div className="flex w-full justify-between">
          <Link href={"https://www.dimensionlab.org/terms-and-conditions.html"} target="_blank">
              Terms & Conditions
          </Link>
          <Link href={"https://www.dimensionlab.org/privacy-policy.html"} target="_blank">
              Privacy Policy
          </Link>
        </div>
        <span className="text-muted text-xs">
          ©2021-{new Date().getFullYear()} DimensionLab, creators of Siml.ai
        </span>
      </footer>
    </div>
  );
}