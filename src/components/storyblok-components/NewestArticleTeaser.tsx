import Link from "next/link";
import { useState } from "react";

const NewestArticleTeaser = ( { article }: any) => {
    const [loaded, setLoaded] = useState(false);
    return (
        <section className="w-full" key={article.uuid}>
            <Link href={`${loaded ? `/blog/${article.content.slug}` : `#`}`}>
                <a>
                    <article className="flex flex-row">
                        <div className="w-3/4 overflow-hidden flex">
                            <img src={article.content.image.filename} alt={article.content.image.alt} className={`${loaded ? `flex` : `hidden`} rounded-l-xl object-cover aspect-video w-full`} onLoad={() => setLoaded(true)}/>
                            <img src="/assets/simlai/placeholder-solid-white.svg" alt="" className={`${loaded ? `hidden` : `flex rounded-l-xl object-cover aspect-video w-full skeleton`}`}/>
                        </div>
                        <div className="flex flex-col w-1/4 px-6 py-12 gap-y-6 bg-[#222530] rounded-r-xl justify-between">
                            <h1 className={`${loaded ? `flex` : `hidden`} self-start w-full text-xl`}>{article.content.title}</h1>
                            <h1 className={`${loaded ? `hidden` : `flex self-start w-full text-xl text-transparent rounded-xl gap-y-2 flex-col`}`}>
                                <span className="skeleton rounded-xl">something random that is</span>
                                <span className="skeleton rounded-xl">displayed here instead of</span>
                                <span className="skeleton rounded-xl">displayed here instead of</span>
                            </h1>
                            <div className="flex w-full justify-between items-center">
                                <span className={`text-sm ${loaded ? `text-[#7C7F8B]` : `skeleton w-3/4 text-transparent rounded-xl`}`}>{article.content.category}</span>
                                <img src="/assets/simlai/arrow-blog-teaser.svg"></img>
                            </div>
                        </div>
                    </article>
                </a>
            </Link>
        </section>
    );
}

export default NewestArticleTeaser;