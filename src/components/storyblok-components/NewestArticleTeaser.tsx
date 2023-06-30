import Link from "next/link";

const NewestArticleTeaser = ( { article }: any) => {
    return (
        <section className="w-full" key={article.uuid}>
            <Link href={`/blog/${article.content.slug}`}>
                <a>
                    <article className="flex flex-row">
                        <div className="w-3/4 overflow-hidden flex">
                            <img src={article.content.image.filename} alt={article.content.image.alt} className="rounded-l-xl object-cover aspect-video w-full"/>
                        </div>
                        <div className="flex flex-col w-1/4 px-6 py-12 gap-y-6 bg-[#222530] rounded-r-xl justify-between">
                            <h1 className="flex self-start w-full text-xl">{article.content.title}</h1>
                            <div className="flex w-full justify-between items-center">
                                <span className="text-sm text-[#7C7F8B]">Model Engineer</span>
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