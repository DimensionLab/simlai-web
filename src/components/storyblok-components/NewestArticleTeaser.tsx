const NewestArticleTeaser = ( { Article }: any) => {
    console.log(Article);
    return (
        <section>
            <article>
                <div>
                    <img src={Article.content.image.filename} alt={Article.content.image.alt} />
                </div>
                <div className="h-1/2 flex flex-col w-full px-6 py-12 gap-y-6 bg-[#222530] rounded-b-xl">
                    <h1 className="flex self-start w-full text-xl">{Article.content.title}</h1>
                    <div className="flex w-full justify-between items-center">
                        <span className="text-sm text-[#7C7F8B]">Model Engineer</span>
                        <img src="/assets/simlai/arrow-blog-teaser.svg"></img>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default NewestArticleTeaser;