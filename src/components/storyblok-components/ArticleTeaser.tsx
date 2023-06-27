import Link from "next/link";

interface ArticleTeaserProps {
  slug: string;
  image: ArticleImage;
  title: string;
  uuid: string;
  content: {
    slug: string;
  };
}

interface ArticleImage {
  filename: string;
}

const ArticleTeaser = ({ slug, image, title, uuid, content }: ArticleTeaserProps) => {
  return (
    <section className="w-full py-2">
      <div className="w-full px-4">
        <Link href={`/blog/${slug}`}>
          <a className="w-full flex flex-col items-center h-full">
            <div className="flex w-full">
              <img src={image?.filename} alt="blog" className="w-full aspect-video object-cover rounded-t-xl"/>
            </div>
            <div className="h-1/2 flex flex-col w-full px-6 py-12 gap-y-6 bg-[#222530] rounded-b-xl">
              <h1 className="flex self-start w-full text-xl">{title}</h1>
              <div className="flex w-full justify-between items-center">
                <span className="text-sm text-[#7C7F8B]">Model Engineer</span>
                <img src="/assets/simlai/arrow-blog-teaser.svg"></img>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ArticleTeaser;