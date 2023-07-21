import ArticleTeaser from "./ArticleTeaser";
import {
  getStoryblokApi,
  storyblokEditable
} from "@storyblok/react";

import { useState, useEffect, useContext } from "react";
import ArticleLoadingSkeleton from "../blog-components/ArticleLoadingSkeleton";
import NewestArticleTeaser from "./NewestArticleTeaser";
import { BlogContext } from "@/pages/blog";

const WHICH_VERSION = process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ? "published" : "draft";

const AllArticles = ({ blok }: any) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const selectedCategory = useContext(BlogContext);
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    const getArticles = async () => {
      setIsLoading(true);
      const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get(`cdn/stories`, {
          version: WHICH_VERSION,
          starts_with: 'blog/',
          is_startpage: false
        });
  
        setArticles((prev) => data.stories.map((article: any) => {
          article.content.slug = article.slug;
          return article;
        }));

        setCategories((prev) => data.stories.map((category: any) => {
          console.log(category.content.category);
          return category.content.category;
        }))
        setIsLoading(false);
    };
    getArticles();
  }, []);

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory])

  return (
    <section className="w-full flex items-center justify-center max-w-screen-xl" key={blok.uuid}>
      <div className="w-full flex justify-center">
        <div className="article-container flex flex-col gap-y-8 xl:flex-row">
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
            <div className="flex flex-col items-center justify-center gap-y-8">
              <div {...storyblokEditable(blok)} className="hidden xl:flex w-full items-center justify-center">
                {blok && articles[0] && <NewestArticleTeaser article={articles[0]}/>}
              </div>
              <div {...storyblokEditable(blok)} className="hidden xl:flex w-full items-center justify-center">
                {blok && articles[1] && <NewestArticleTeaser article={articles[1]}/>}
              </div>
              <div {...storyblokEditable(blok)} className="hidden xl:flex w-full items-center justify-center">
                {blok && articles[2] && <NewestArticleTeaser article={articles[2]}/>}
              </div>
              <div {...storyblokEditable(blok)}
                className="w-full flex flex-col xl:flex-row items-center justify-center xl:hidden">
                {blok && articles[0] && articles.map((article: any) => (
                  <ArticleTeaser article={article.content} key={article.uuid} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AllArticles;