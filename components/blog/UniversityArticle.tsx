"use client";

import { renderRichText } from "@storyblok/react";
import "prismjs/themes/prism-twilight.css";
import Prism from "prismjs";
import { useEffect, useState } from "react";
import css from "@/components/componentStyles/blogArticle.module.css";
import { UniversityPostCard } from "@/types/blog";
import Image from "next/image";

export default function UniversityArticle({ story }: { story: UniversityPostCard }) {
  const [videoData, setVideoData] = useState<{ url: string, title: string } | null>(null);
  useEffect(() => {
    Prism.highlightAll();
  }, [story.content.description_content]);

  useEffect(() => {
    const getVideoData = async (videoLinkUrl: string) => {
      const response = await fetch(`https://www.youtube.com/oembed?url=${videoLinkUrl}`)
      const data = await response.json();
    
      const srcRegex = /src="([^"]+)"/;
      const matches = data.html.match(srcRegex);
      
      let srcValue = "";
      if (matches && matches.length >= 2) {
          srcValue = matches[1];
      } else {
          console.log("No 'src' attribute found or the URL is invalid.");
      }
    
      const info = {
          url: srcValue,
          title: data.title
      }
    
      return info;
    }

    getVideoData(story.content.video_link.url).then((data) => {
      setVideoData(data);
    });
  }, []);

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
              <span className="text-[#7C7F8B]">University</span>
            </div>
            <div className="w-full flex flex-col">
              <span className="text-[#454853]">Author:</span>
              <span className="text-[#7C7F8B]">DimensionLab</span>
            </div>
          </div>
          <div className="img-container w-full max-w-4xl lg:py-10">
            <section className={css.imageWrapper}>
              <iframe className="aspect-video w-full" src={videoData?.url} title={videoData?.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </section>
          </div>
          <div className="article-text text-md w-full max-w-4xl flex flex-col gap-y-10 items-center">
            <section className={css.richTextContent} dangerouslySetInnerHTML={{ __html: renderRichText(story.content.description_content) }} />
          </div>
        </div>
      </div>
    </article>
  );
};