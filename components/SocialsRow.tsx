import Link from "next/link"
import Image from "next/image"

const socialsData = [
  {
    icon: "/assets/facebook-logo.svg",
    href: "https://www.facebook.com/dl.simlai",
  },
  {
    icon: "/assets/twitter-logo.svg",
    href: "https://twitter.com/siml_ai",
  },
  {
    icon: "/assets/li-logo.svg",
    href: "https://www.linkedin.com/company/dimensionlab",
  },
  {
    icon: "/assets/ig-logo.svg",
    href: "https://www.instagram.com/siml.ai",
  },
  {
    icon: "/assets/discord-logo.png",
    href: "https://discord.gg/UxQyC9PEqt",
  },
  {
    icon: "/assets/reddit-logo.png",
    href: "https://www.reddit.com/r/simlai/"
  }
]

export default function SocialsRow() {

  return (
    <ul className="flex w-full justify-between gap-x-2 xl:gap-x-4">
      {socialsData.map((social, index) => (
        <li key={index} className="flex gap-x-4">
          <Link href={social.href} target="_blank">
            <Image src={social.icon} alt="Social" width={30} height={30} />
          </Link>
        </li>
      ))}
    </ul>
  )
}