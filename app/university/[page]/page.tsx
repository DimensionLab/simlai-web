import BlogPost from "@/components/blog/BlogPost";
import { BlogStory, UniversityPostCard, UniversityStory } from "@/types/blog";
import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import Link from "next/link";
// import Image from "next/image";
import { cn } from "@/lib/utils";
import UniversityPost from "@/components/blog/UniversityPost";
import { storyblokVersion } from "@/lib/environment";

const STORIES_PER_PAGE = 10;

export default async function UniversityRootPage({
  params,
}: {
  params: { page: string };
}) {
  const response = await fetchData(params.page);
  const { stories }: { stories: UniversityPostCard[] } = response.data;
  const nPage = parseInt(params.page);

  const previousExists = nPage > 1;
  const nextExists = response.total > nPage * STORIES_PER_PAGE;

  return (
    <section className="flex flex-col w-full h-full gap-y-12">
      <h1 className="text-4xl font-bold">University</h1>
      <ul className="flex flex-col gap-y-12 items-center w-full">
        {stories.map((uniPost) => {
          return (
            <li key={uniPost.uuid} className={cn("max-w-6xl")}>
              <Link href={`/university/post/${uniPost.slug}`}>
                <UniversityPost uniPost={uniPost} />
              </Link>
            </li>
          );
        })}
      </ul>
      <section className="flex justify-center">
        <div className="flex flex-row items-center justify-center w-full gap-x-10 max-w-2xl">
          <Link
            href={`/university/${nPage === 1 ? 1 : nPage - 1}`}
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
            href={`/university/${nPage + 1}`}
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
    starts_with: "university/",
    is_startpage: false,
    per_page: 10,
    page: nPage,
  };
  const response = await storyblokApi.get(`cdn/stories/`, params);
  return response;
}
