import {
  getStoryblokApi,
  storyblokEditable
} from "@storyblok/react";

import { useState, useEffect } from "react";
import ArticleLoadingSkeleton from "../blog-components/ArticleLoadingSkeleton";
import UniTeaser from "./UniTeaser";

const WHICH_VERSION = process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ? "published" : "draft";

interface AllUniversityPostsProps {
  story: any;
  postsArr: any[];
}

const AllUniversityPosts = (props: AllUniversityPostsProps) => {
  const blok = props.story;
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const postsArr = props.postsArr;

  return (
    <section className="w-full flex flex-col items-center py-12">
      <section className="w-full flex items-center justify-center max-w-screen-xl" key={blok.uuid}>
        <div className="w-full flex justify-center">
          <div className="article-container flex flex-col gap-y-8 xl:flex-row w-full">
            {isLoading ? (
              <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-y-4 xl:grid-cols-4 items-center justify-center">
                <ArticleLoadingSkeleton />
                <ArticleLoadingSkeleton />
                <ArticleLoadingSkeleton />
                <ArticleLoadingSkeleton />
                <ArticleLoadingSkeleton />
                <ArticleLoadingSkeleton />
                <ArticleLoadingSkeleton />
                <ArticleLoadingSkeleton />
              </div>
            ) : (
              <div className="flex flex-col w-full items-center justify-center gap-y-8">
                    <div {...storyblokEditable(blok)}
                      className="w-full flex flex-col xl:flex-row items-center justify-center">
                      { postsArr.map((post: any) => (
                        <UniTeaser uniPost={post.content} key={post.uuid} />
                      ))}
                    </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  )
}

export default AllUniversityPosts;