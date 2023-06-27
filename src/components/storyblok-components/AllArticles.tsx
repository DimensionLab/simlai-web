import ArticleTeaser from "./ArticleTeaser";
import {
  getStoryblokApi,
  storyblokEditable
} from "@storyblok/react";

import { useState, useEffect } from "react";
import ArticleLoadingSkeleton from "../blog-components/ArticleLoadingSkeleton";
import { AllArticlesStoryblok } from "../../../component-types-sb";


const AllArticles = ({ blok }: any) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getArticles = async () => {
      setIsLoading(true);
      const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get(`cdn/stories`, {
          version: "draft",
          starts_with: 'blog/',
          is_startpage: false
        });
  
        setArticles((prev) => data.stories.map((article: any) => {
          article.content.slug = article.slug;
          return article;
        }));
        setIsLoading(false);
    };
    getArticles();
  }, []);

  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full">
        <div className="article-container flex flex-col gap-y-8 xl:flex-row">
          {isLoading ? (
            <div className="w-full flex flex-col xl:flex-row items-center justify-center">
              <ArticleLoadingSkeleton />
              <ArticleLoadingSkeleton />
              <ArticleLoadingSkeleton />
              <ArticleLoadingSkeleton />
            </div>
          ) : (
            <div {...storyblokEditable(blok)}
              className="w-full flex flex-col xl:flex-row items-center justify-center">
              {blok && articles[0] && articles.map((article: any) => (
                <ArticleTeaser articleTeaserProps={article.content} key={article.uuid} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AllArticles;