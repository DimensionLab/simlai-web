"use client";

import { UniversityPostCard, UniversityStory } from "@/types/blog";
import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import Link from "next/link";
import { cn } from "@/lib/utils";
import UniversityPost from "@/components/blog/UniversityPost";
import { storyblokVersion } from "@/lib/environment";
import { useEffect, useState } from "react";
import fetchMoreUniPosts from "./fetchMoreUniPosts";
import SkeletonCard from "@/components/blog/skeletonCard";

const STORIES_PER_PAGE = 10;

export default function UniversityRootPage(){
  const [storiesObjects, setStoriesObjects] = useState<UniversityPostCard[]>([]);
  const [currPage, setCurrPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchMoreUniPosts(currPage).then((newStories) => {
      setStoriesObjects(newStories.data);
      setCurrPage(currPage + 1);
      setTotal(newStories.total);
    });
  }, [])

  const mockArray = Array.from({ length: STORIES_PER_PAGE }, (_, i) => i);

  return (
    <section className="flex flex-col w-full h-full gap-y-12">
      <h1 className="text-4xl font-bold">University</h1>
      <ul className="flex flex-col gap-y-12 items-center w-full">
        {storiesObjects?.length > 0 ? storiesObjects.map((uniPost) => {
          return (
            <li key={uniPost.uuid} className={cn("max-w-6xl")}>
              <Link href={`/university/${uniPost.slug}`}>
                <UniversityPost uniPost={uniPost} />
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
              fetchMoreUniPosts(currPage).then((newStories) => {
                const { data } = newStories;
                const oldStoryIdSet = new Set(storiesObjects.map((story) => story.uuid));
                const storiesArray = data.filter((story) => !oldStoryIdSet.has(story.uuid)); // remove duplicates
                const arr = storiesObjects.concat(storiesArray);
                setStoriesObjects(arr);
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