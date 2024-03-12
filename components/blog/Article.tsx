"use client";

import { renderRichText, storyblokEditable } from "@storyblok/react/rsc";
import "prismjs/themes/prism-twilight.css";
import Prism from "prismjs";
import { useEffect } from "react";
import css from "@/components/componentStyles/blogArticle.module.css";
import Image from "next/image";
import { BlogStory } from "@/types/blog";

const Article = ({ blok, firstPublishedAt }: { blok: BlogStory["content"], firstPublishedAt: string}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [blok.content]);

  const date = new Date(firstPublishedAt).toDateString();

  return (
    <article {...storyblokEditable(blok._editable)}>
      <div className="w-full flex items-center justify-center">
        <div className="article-content flex flex-col gap-y-8 items-center">
          <h1
            className="font-bold text-3xl md:text-4xl lg:text-5xl max-w-5xl flex self-start"
          >
            {blok.title}
          </h1>
          <div className="grid w-full pt-8 self-start -mt-10 gap-x-2 grid-cols-3 max-w-md text-sm md:text-lg">
            <div className="w-full flex flex-col">
              <span className="text-[#454853]">Date:</span>
              <span className="text-[#7C7F8B]" suppressHydrationWarning>{date}</span>
            </div>
            <div className="w-full flex flex-col">
              <span className="text-[#454853]">Category:</span>
              <span className="text-[#7C7F8B]">{blok.category}</span>
            </div>
            <div className="w-full flex flex-col">
              <span className="text-[#454853]">Author:</span>
              <span className="text-[#7C7F8B]">
                {blok.author
                  ? `${blok.author}`
                  : "DimensionLab"}
              </span>
            </div>
          </div>
          <div className="img-container w-full max-w-4xl lg:py-10">
            <section className={css.imageWrapper}>
              {blok && blok.image  && (
                <Image
                  src={blok.image.filename}
                  alt={blok.image.alt || ""}
                  className="rounded-xl"
                  width={1920}
                  height={1080}
                />
              )}
            </section>
          </div>
          <div className="article-text text-md w-full max-w-4xl flex flex-col gap-y-10 items-center">
            <section className={css.richTextContent} dangerouslySetInnerHTML={{ __html: renderRichText(blok.content) }} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
