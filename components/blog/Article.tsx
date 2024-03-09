"use client";

import { renderRichText } from "@storyblok/react";
import "prismjs/themes/prism-twilight.css";
import Prism from "prismjs";
import { useEffect } from "react";
import css from "@/components/componentStyles/blogArticle.module.css";
import { BlogStory } from "@/types/blog";
import Image from "next/image";

const Article = ({ story }: { story: BlogStory }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [story.content.content]);

  const date = new Date(story.first_published_at).toLocaleDateString();
  
  return (
    <article>
      <div className="w-full flex items-center justify-center">
        <div className="article-content flex flex-col gap-y-8 items-center">
          <h1
            className="font-bold text-3xl md:text-4xl lg:text-5xl max-w-5xl flex self-start"
          >
            {story.content.title}
          </h1>
          <div className="grid w-full pt-8 self-start -mt-10 gap-x-2 grid-cols-3 max-w-md text-sm md:text-lg">
            <div className="w-full flex flex-col">
              <span className="text-[#454853]">Date:</span>
              <span className="text-[#7C7F8B]">{date}</span>
            </div>
            <div className="w-full flex flex-col">
              <span className="text-[#454853]">Category:</span>
              <span className="text-[#7C7F8B]">{story.content.category}</span>
            </div>
            <div className="w-full flex flex-col">
              <span className="text-[#454853]">Author:</span>
              <span className="text-[#7C7F8B]">
                {story.content.author
                  ? `${story.content.author}`
                  : "DimensionLab"}
              </span>
            </div>
          </div>
          {/* <h2>{blok.subtitle}</h2> */}
          <div className="img-container w-full max-w-4xl lg:py-10">
            <section className={css.imageWrapper}>
              {story.content.image && story.content.image.filename && (
                <Image
                  src={story.content.image.filename}
                  alt={story.content.image.alt || ""}
                  className="rounded-xl"
                  width={1920}
                  height={1080}
                />
              )}
            </section>
          </div>
          <div className="article-text text-md w-full max-w-4xl flex flex-col gap-y-10 items-center">
            <section className={css.richTextContent} dangerouslySetInnerHTML={{ __html: renderRichText(story.content.content) }} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
