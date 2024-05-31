import { CaseStudyCard } from "@/types/case-study";
import Image from "next/image";
import Link from "next/link";

interface Props {
  caseStudyPost: CaseStudyCard;
}

export default function CaseStudyPostCard({ caseStudyPost }: Props) {
  const { title, published_at, category, image } = caseStudyPost;
  const parsedDate = new Date(published_at).toDateString();
  return (
    <div className="relative flex">
      <div className="card w-96 rounded hover:shadow-lg border border-gray-800 hover:border-gray-700 p-0 overflow-hidden transition-transform duration-500 bg-darkBg">
        {/* <CardLikeButton /> */}
        <Link href={`/case-studies/${caseStudyPost.slug}`}>
            <img
              src={image.filename}
              alt={image.alt}
              className="object-cover hover:scale-[1.05] transition-transform duration-500 h-[220px] w-full"
            />
          <div className="flex flex-col card-body p-4 h-auto">
            <div className="flex flex-row card-title text-md">{title?.length > 90 ? title?.slice(0, 87) + "..." : title}</div>
            {/* <p className="text-xs">
              {resource.description.length > 120
                ? resource.description.substring(0, 120) + "..."
                : resource.description}
            </p> */}
            <div className="flex flex-row justify-between content-items-end mt-4">
              <p className="flex flex-row text-muted font-light text-sm">{category ? category : "Case study"}</p>
              <p className="flex flex-row text-muted text-sm">read more <Image src="/assets/simlai/arrow-blog-teaser.svg" alt="arrow" className="ml-2" width={20} height={20} /></p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
