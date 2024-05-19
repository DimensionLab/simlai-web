"use client";

import { CaseStudyCard } from "@/types/case-study";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import fetchMorePosts from "./fetchMorePosts";
import { CASE_STUDIES_PER_PAGE } from "./constants";
import SkeletonCard from "@/components/case-studies/CaseStudySkeletonCard";
import CaseStudyPost from "@/components/case-studies/CaseStudyCard";

interface CachedArticles {
  articles: CaseStudyCard[];
  time: number;
  total: number;
  page: number;
}

const CACHE_INVALIDATION_TIME = 1000 * 20 * 5; // 5 minutes

export default function BlogRootPage() {
  const [storiesObjects, setStoriesObjects] = useState<CaseStudyCard[]>([]);
  const [currPage, setCurrPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const localStorage = window.localStorage;
    const blogArticles = localStorage.getItem("caseStudiesArticles");

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

      localStorage.setItem("caseStudiesArticles", JSON.stringify(obj));
      setCurrPage(currPage + 1);
      setTotal(newStories.total);
    });
  }, [])

  const mockArray = Array.from({ length: CASE_STUDIES_PER_PAGE }, (_, i) => i);

  return (
    <section className="flex flex-col w-full h-full gap-y-12 my-10">
      <h1 className="font-bold text-2xl sm:text-5xl mx-auto">Case studies</h1>
      <h3 className="text-[#B4B6C3] font-normal text-xl lg:line-clamp-2 mx-auto text-center">
        Read how Siml.ai is used across the industry
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-4 mt-10 mx-auto">
        {storiesObjects?.length > 0 ? storiesObjects.map((caseStudyPost) => {
          return (
            <CaseStudyPost key={caseStudyPost._uid} caseStudyPost={caseStudyPost} />
          );
        }) : (
          mockArray.map((_, i) => {
            return (
              <SkeletonCard key={i} />
            )
          })
        )}
        
      </div>
      {(total >= (currPage - 1) * CASE_STUDIES_PER_PAGE) && <section className="flex justify-center">
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
                localStorage.setItem("caseStudiesArticles", JSON.stringify(obj));
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
