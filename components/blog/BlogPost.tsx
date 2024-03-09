import { BlogPostCard } from "@/types/blog";
import Image from "next/image";

interface Props {
  blogPost: BlogPostCard;
}

export default function BlogPost({ blogPost }: Props) {
  const { title, published_at, category, image, slug } = blogPost;
  const parsedDate = new Date(published_at);
  return (
    <article className="flex flex-col bg-lightBg rounded-lg xl:flex-row xl:w-full">
      <Image
        src={image.filename}
        alt={image.alt}
        width={1920}
        height={1080}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mMss3nyn4EIwDiqkL4KAX5SGd1NFAjQAAAAAElFTkSuQmCC"
        placeholder="blur"
        className="rounded-t-lg object-cover aspect-video xl:w-3/4 xl:min-w-[864px]"
      />
      <div className="flex flex-col px-4 py-4 gap-y-2 xl:1/4 xl:justify-between xl:min-w-[288px]">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-xl">{title}</h2>
          <h3 className="text-muted text-sm">{parsedDate.toLocaleDateString()}</h3>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-muted font-light text-lg">{category ? category : "Blog"}</p>
          <Image src="/assets/simlai/arrow-blog-teaser.svg" alt="arrow" width={20} height={20} />
        </div>
      </div>
    </article>
  );
}
