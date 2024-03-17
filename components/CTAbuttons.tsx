import Link from "next/link";
import Image from "next/image";

export default function CTAbuttons() {
  return (
    <div className="flex flex-row gap-x-2 w-full justify-center">
      <Link
        href={
          "https://www.producthunt.com/products/siml-ai?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-siml&#0045;ai"
        }
        target="_blank"
      >
        <Image
          src="/assets/productHunt.svg"
          alt="Siml.ai on Product Hunt"
          width={250}
          height={54}
        />
      </Link>
      <Link
        href="https://theresanaiforthat.com/ai/siml-ai/?ref=embed"
        target="_blank"
      >
        <Image
          src="/assets/taaftBanner.webp"
          alt="Siml.ai on There's an AI for That"
          width={250}
          height={54}
        />
      </Link>
    </div>
  );
}
