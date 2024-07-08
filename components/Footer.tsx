"use client";

import Image from 'next/image'
import SocialsRow from './SocialsRow';
import Link from 'next/link';
import useClientOrigin from '@/lib/useClientOrigin';

const mainPoints = ["PRODUCT", "COMPANY"];

const productLinks = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Model Engineer",
    href: "#model-engineer",
  },
  {
    name: "Simulation Studio",
    href: "#simulation-studio",
  },
  {
    name: "Case Studies",
    href: "https://siml.ai/case-studies"
  },
  {
    name: "Docs",
    href: "https://docs.siml.ai",
  },
];

const companyLinks = [
  {
    name: "Contact",
    href: "mailto:hello@dimensionlab.org"
  },
  {
    name: "DimensionLab",
    href: "https://dimensionlab.org"
  },
  {
    name: "Terms & Conditions",
    href: "https://www.dimensionlab.org/terms-and-conditions",
  },
  {
    name: "Privacy Policy",
    href: "https://www.dimensionlab.org/privacy-policy",
  }
];

export default function Footer() {
  const origin = useClientOrigin();
  return (
    <footer className="bg-lightBg w-full">
      <section className="flex flex-col py-12 gap-y-6 px-4 lg:items-center">

        <ul className='flex flex-col gap-y-6 lg:flex-row lg:w-full lg:justify-between lg:max-w-4xl'>
          <div className='flex flex-col gap-y-6 max-w-[60%]'>
            <Image src={"/assets/simlai/header-nav-logo.svg"} alt="Siml.ai" width={120} height={50} />
            <SocialsRow />
          </div>
          {mainPoints.map((point, index) => (
            <li key={index} className="font-light text-md text-muted">
              <span>{point}</span>
              {point === "PRODUCT" ? (
                <ul className="flex flex-col pt-2">
                  {productLinks.map((link, index) => (
                    <li key={index} className="text-md text-white">
                      <Link href={link.href.startsWith("https://") || link.href.startsWith("mailto:") ? link.href : origin + link.href} target={link.href.startsWith("https://") ? "_blank" : ""}>
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="flex flex-col pt-2">
                  {companyLinks.map((link, index) => (
                    <li key={index} className="text-md text-white">
                      <Link href={link.href.startsWith("https://") || link.href.startsWith("mailto:") ? link.href : origin + link.href} target={link.href.startsWith("https://") ? "_blank" : ""} >
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className='w-full flex lg:max-w-4xl'>
          <footer className="text-muted text-xs">
            ©2021-{new Date().getFullYear()} DimensionLab, creators of Siml.ai
          </footer>
        </div>
      </section>
    </footer>
  )
}
