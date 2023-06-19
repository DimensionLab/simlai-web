import Link from "next/link";
import { render } from 'storyblok-rich-text-react-renderer';

const ArticleTeaser = ({ Article }) => {
  return (
    <section className="w-full">
      <div className="w-full px-4">
        <Link href={`/blog/${Article.slug}`}>
          <a className="w-full flex flex-col items-center h-full">
            <div className="flex w-full h-1/2">
              <img src={Article.image.filename} alt="blog" className="h-1/2 rounded-t-xl"/>
            </div>
            <div className="h-1/2 flex flex-col w-full px-6 py-6 gap-y-6 bg-[#222530] rounded-b-xl">
              <h1 className="flex self-start w-full text-xl">{Article.title}</h1>
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