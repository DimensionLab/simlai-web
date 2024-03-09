import BlogPost from "@/components/blog/BlogPost";
import { BlogStory } from "@/types/blog";
import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import Link from "next/link";
// import Image from "next/image";
import { cn } from "@/lib/utils";
import { storyblokVersion } from "@/lib/environment";

const STORIES_PER_PAGE = 10;

export default async function BlogRootPage({
  params,
}: {
  params: { page: string };
}) {
  const response = await fetchData(params.page);
  const { stories }: { stories: BlogStory[] } = response.data;
  const nPage = parseInt(params.page);
  const storiesObjects = stories.map((blogPost) => {
    return {
      title: blogPost.content.title,
      published_at: blogPost.first_published_at,
      category: blogPost.content.category,
      image: blogPost.content.image,
      slug: blogPost.slug,
      _uid: blogPost.uuid,
      date: blogPost.content.date,
    };
  });

  const previousExists = nPage > 1;
  const nextExists = response.total > nPage * STORIES_PER_PAGE;

  return (
    <section className="flex flex-col w-full h-full gap-y-12">
      <h1 className="text-4xl font-bold">Blog</h1>
      <ul className="flex flex-col gap-y-12 items-center w-full">
        {storiesObjects.map((blogPost) => {
          return (
            <li key={blogPost._uid} className={cn("max-w-6xl")}>
              <Link href={`/blog/post/${blogPost.slug}`}>
                <BlogPost blogPost={blogPost} />
              </Link>
            </li>
          );
        })}
      </ul>
      <section className="flex justify-center">
        <div className="flex flex-row items-center justify-center w-full gap-x-10 max-w-2xl">
          <Link
            href={`/blog/${nPage === 1 ? 1 : nPage - 1}`}
            className={cn(
              `${
                !previousExists ? "cursor-not-allowed pointer-events-none" : ""
              } w-1/2 border-2 border-muted px-4 py-2 rounded text-muted text-center duration-300 hover:text-white hover:border-btnPurple`
            )}
          >
            {/* <Image src="/assets/simlai/arrow-blog-teaser.svg" alt="arrow" width={20} height={20} className="rotate-180"/> */}
            {"< Previous"}
          </Link>
          <Link
            href={`/blog/${nPage + 1}`}
            className={cn(
              `${
                !nextExists ? "cursor-not-allowed pointer-events-none" : ""
              } w-1/2 border-2 border-muted px-4 py-2 rounded text-muted text-center duration-300 hover:text-white hover:border-btnPurple`
            )}
          >
            {/* <Image src="/assets/simlai/arrow-blog-teaser.svg" alt="arrow" width={20} height={20} /> */}
            {"Next >"}
          </Link>
        </div>
      </section>
    </section>
  );
}

async function fetchData(page: string = "1") {
  const nPage = parseInt(page);
  const storyblokApi = getStoryblokApi();
  const params: ISbStoriesParams = {
    version: storyblokVersion,
    starts_with: "blog/",
    is_startpage: false,
    per_page: 10,
    page: nPage,
  };
  const response = await storyblokApi.get(`cdn/stories/`, params, {
    cache: "no-store",
  });
  return response;
}
