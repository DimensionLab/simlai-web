"use client";

import BlogPost from "@/components/blog/BlogPost";
import { BlogPostCard } from "@/types/blog";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import fetchMorePosts from "./fetchMorePosts";
import Link from "next/link";
import { STORIES_PER_PAGE } from "./constants";
import SkeletonCard from "@/components/blog/skeletonCard";

interface CachedArticles {
  articles: BlogPostCard[];
  time: number;
  total: number;
  page: number;
}

const CACHE_INVALIDATION_TIME = 1000 * 20 * 5; // 5 minutes

export default function BlogRootPage() {
  const [storiesObjects, setStoriesObjects] = useState<BlogPostCard[]>([]);
  const [currPage, setCurrPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const localStorage = window.localStorage;
    const blogArticles = localStorage.getItem("blogArticles");

    if (blogArticles !== null && blogArticles !== undefined) {
      const parsedArticles: CachedArticles = JSON.parse(blogArticles);

      // use cached only if time is less than 5 minutes
      if (parsedArticles.time + CACHE_INVALIDATION_TIME > Date.now()) {
        setStoriesObjects(parsedArticles.articles);
        setTotal(parsedArticles.total);
        setCurrPage(parsedArticles.page);
        return;
      }
      // if time is more than 5 minutes, fetch new ones (goes to "fetchMorePosts" below)
    }

    fetchMorePosts(currPage).then((newStories) => {
      setStoriesObjects(newStories.data);
      const obj = {
        articles: newStories.data,
        time: Date.now(),
        total: newStories.total,
        page: currPage + 1,
      };

      localStorage.setItem("blogArticles", JSON.stringify(obj));
      setCurrPage(currPage + 1);
      setTotal(newStories.total);
    });
  }, [])

  const mockArray = Array.from({ length: STORIES_PER_PAGE }, (_, i) => i);

  return (
    <section className="flex flex-col w-full h-full gap-y-12">
      <h1 className="text-4xl font-bold">Blog</h1>
      <ul className="flex flex-col gap-y-12 items-center w-full">
        {storiesObjects?.length > 0 ? storiesObjects.map((blogPost) => {
          return (
            <li key={blogPost._uid} className={cn("max-w-6xl")}>
              <Link href={`/blog/${blogPost.slug}`}>
                <BlogPost blogPost={blogPost}/>
              </Link>
            </li>
          );
        }) : (
          mockArray.map((_, i) => {
            return (
              <SkeletonCard key={i} />
            )
          })
        )}
        
      </ul>
      {(total >= (currPage - 1) * STORIES_PER_PAGE) && <section className="flex justify-center">
        <div className="flex flex-row items-center justify-center w-full gap-x-10 max-w-2xl">
          <button
            className={cn(`w-1/2 border-2 border-muted px-4 py-2 rounded text-muted text-center duration-300 hover:text-white hover:border-btnPurple`)}
            onClick={() => {
              fetchMorePosts(currPage).then((newStories) => {
                const { data } = newStories;
                const oldStoryIdSet = new Set(storiesObjects.map((story) => story._uid));
                const storiesArray = data.filter((story) => !oldStoryIdSet.has(story._uid)); // remove duplicates
                const obj = {
                  articles: storiesObjects.concat(storiesArray),
                  time: Date.now(),
                  total: newStories.total,
                  page: currPage + 1,
                };
                setStoriesObjects(obj.articles);

                const localStorage = window.localStorage;
                localStorage.setItem("blogArticles", JSON.stringify(obj));
                setCurrPage(currPage + 1);
              })}}
          >
            {"Load more..."}
          </button>
        </div>
      </section>}
    </section>
  );
}
