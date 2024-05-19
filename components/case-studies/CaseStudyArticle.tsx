"use client";

import {
  renderRichText,
  storyblokEditable,
} from "@storyblok/react/rsc";
import "prismjs/themes/prism-twilight.css";
import Prism from "prismjs";
import { useEffect } from "react";
import { CaseStudyStory } from "@/types/case-study";
import { customRichTextSchema } from "@/lib/richTextSchema";
import cx from "classnames";

const CaseStudyArticle = ({
  blok,
  firstPublishedAt,
}: {
  blok: CaseStudyStory["content"];
  firstPublishedAt: string;
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [blok.content]);

  const renderedRichText = renderRichText(
    blok.content,
    { schema: customRichTextSchema }
  );

  return (
    <article {...storyblokEditable(blok._editable)}>
      <div className="w-full flex items-center justify-center">
        <div className="article-content flex flex-col gap-y-8 items-center">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl max-w-5xl flex mx-auto text-center">
            {blok.title}
          </h1>
          {blok.description && (
            <h3 className="font-normal text-xl lg:line-clamp-2 flex mx-auto text-center">
              {blok.description}
            </h3>
          )}
          <div className="article-text text-md w-full max-w-4xl flex flex-col gap-y-10 items-center mt-12 list-disc">
            <section
              className={cx("prose", "max-w-full")}
              dangerouslySetInnerHTML={{ __html: renderedRichText }}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default CaseStudyArticle;
