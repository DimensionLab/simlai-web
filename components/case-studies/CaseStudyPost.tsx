import { BlogPostCard } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

interface Props {
  blogPost: BlogPostCard;
}

export default function CaseStudyPost({ blogPost }: Props) {
  const { title, published_at, category, image } = blogPost;
  const parsedDate = new Date(published_at).toDateString();
  return (
    <div className="relative flex">
      <div className="card w-96 rounded hover:shadow-lg border border-gray-800 hover:border-gray-700 p-0 overflow-hidden transition-transform duration-500 bg-darkBg">
        {/* <CardLikeButton /> */}
        <Link href={`/blog/${blogPost.slug}`}>
          <figure>
            <img
              src={image.filename}
              alt={image.alt}
              className="object-cover hover:scale-[1.05] transition-transform duration-500 max-h-50 w-full"
            />
          </figure>
          <div className="card-body p-4 mb">
            <h2 className="card-title text-sm">{title?.length > 100 ? title?.slice(0, 97) + "..." : title}</h2>
            <h3 className="text-muted text-sm">{parsedDate}</h3>
            {/* <p className="text-xs">
              {resource.description.length > 120
                ? resource.description.substring(0, 120) + "..."
                : resource.description}
            </p> */}
            <div className="flex flex-row justify-between">
              <p className="text-muted font-light text-lg">{category ? category : "Blog"}</p>
              <Image src="/assets/simlai/arrow-blog-teaser.svg" alt="arrow" width={20} height={20} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
