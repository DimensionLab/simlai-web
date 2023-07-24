import ArticleTeaser from "./ArticleTeaser";
import {
  getStoryblokApi,
  storyblokEditable
} from "@storyblok/react";

import { useState, useEffect } from "react";
import ArticleLoadingSkeleton from "../blog-components/ArticleLoadingSkeleton";
import NewestArticleTeaser from "./NewestArticleTeaser";
import Search from "../blog-components/Search";

const WHICH_VERSION = process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ? "published" : "draft";

interface AllArticlesProps {
  blok: any;
}

const AllArticles = (props: AllArticlesProps) => {
  const blok = props.blok;
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

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

        let categoryArray: string[] = [];
        data.stories.map((story: any) => {
          categoryArray.push(story.content.category)
        })

        setCategories(categoryArray);
        setIsLoading(false);
    };
    getArticles();
    console.log(categories)
  }, []);

  return (
    <>
      <Search setSelected={setSelectedCategory} categoryArr={categories} />
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
                  {blok && articles[0] && articles[0].content.category == selectedCategory && <NewestArticleTeaser article={articles[0]}/>}
                </div>
                <div {...storyblokEditable(blok)} className="hidden xl:flex w-full items-center justify-center">
                  {blok && articles[1] && articles[1].content.category == selectedCategory && <NewestArticleTeaser article={articles[1]}/>}
                </div>
                <div {...storyblokEditable(blok)} className="hidden xl:flex w-full items-center justify-center">
                  {blok && articles[2] && articles[2].content.category == selectedCategory && <NewestArticleTeaser article={articles[2]}/>}
                </div>
                <div {...storyblokEditable(blok)}
                  className="w-full flex flex-col xl:flex-row items-center justify-center xl:hidden">
                  {blok && articles[0] && articles.map((article: any) => (
                    article.content.category == selectedCategory && <ArticleTeaser article={article.content} key={article.uuid} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllArticles;