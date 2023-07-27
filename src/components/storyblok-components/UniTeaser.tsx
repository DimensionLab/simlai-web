import Link from "next/link";
import { useState } from "react";

const ArticleTeaser = ({ uniPost }: any) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="w-full py-2 h-full" key={uniPost.uuid}>
      <div className="w-full px-4 h-full">
        <Link href={`/university/${uniPost.slug}`}>
          <a className="w-full flex flex-col items-center h-full">
            <div className="flex w-full">
              <img src={uniPost.thumbnail.filename} alt="blog" className={`${loaded ? `w-full aspect-video object-cover rounded-t-xl` : `hidden`}`} onLoad={() => setLoaded(true)}/>
              <img src="/assets/simlai/placeholder-solid-white.svg" alt="placeholder solid white" className={`${loaded ? `hidden` : `w-full aspect-video object-cover rounded-t-xl skeleton`}`}/>
            </div>
            <div className="h-1/2 flex flex-col w-full px-6 py-12 gap-y-6 bg-[#222530] rounded-b-xl flex-grow justify-between">
              <h1 className={`${loaded ? `flex` : `hidden`} self-start w-full text-xl`}>{uniPost.title}</h1>
              <h1 className={`${loaded ? `hidden` : `flex self-start w-full text-xl text-transparent rounded-xl gap-y-2 flex-col`}`}>
                  <span className="skeleton rounded-xl">something random that is</span>
              </h1>
              <div className="flex w-full justify-between items-center">
                <span className={`text-sm ${loaded ? `text-[#7C7F8B]` : `skeleton w-3/4 text-transparent rounded-xl`}`}>Video</span>
                <img src="/assets/simlai/arrow-blog-teaser.svg" alt="arrow icon"/>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ArticleTeaser;