import ArticleTeaser from "./ArticleTeaser";
import {
  getStoryblokApi,
  storyblokEditable
} from "@storyblok/react";

import { useState, useEffect } from "react";
import ArticleLoadingSkeleton from "../blog-components/ArticleLoadingSkeleton";

const AllArticles = ({ blok }) => {
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

      setArticles((prev) => data.stories.map((Article) => {
        Article.content.slug = Article.slug;
        return Article;
      }));
      setIsLoading(false);
    };
    getArticles();
  }, []);

  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full">
        <div className="article-container flex flex-col gap-y-8 xl:flex-row" {...storyblokEditable(blok)}>
        {isLoading ? (
          <div className="w-full flex flex-col xl:flex-row items-center justify-center">
            <ArticleLoadingSkeleton />
            <ArticleLoadingSkeleton />
            <ArticleLoadingSkeleton />
            <ArticleLoadingSkeleton />
          </div>
        ) : (
          articles.map((Article) => (
            <ArticleTeaser Article={Article.content} key={Article.uuid} />
          ))
        )}
        </div>
      </div>
    </section>
  )
}

export default AllArticles;