import ArticleTeaser from "./ArticleTeaser";
import {
  getStoryblokApi,
  storyblokEditable
} from "@storyblok/react";

import { useState, useEffect } from "react";

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
    <section>
      <div className="container">
        <div className="article-container flex flex-col gap-y-8" {...storyblokEditable(blok)}>
          {articles[0] && articles.map((Article) => (
            <ArticleTeaser Article={Article.content} key={Article.uuid} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllArticles;