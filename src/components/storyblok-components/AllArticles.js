import ArticleTeaser from "./ArticleTeaser";
import {
  getStoryblokApi,
  storyblokEditable
} from "@storyblok/react";

import { useState, useEffect } from "react";
import styled from "styled-components";

const AllArticlesWrapper = styled.div`
  display: flex;
  justify-content: center;
  .container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 70%;
    padding: 2rem 0 2rem 0;
    justify-items: center;
    max-width: 800px;
    
    .article-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      padding: 0 0.5rem 0 0.5rem;
      // width: 70%;
      width: 100%;
      gap: 2rem;
      min-height: 60vh;
    }
  }
`;

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
    <AllArticlesWrapper>
      <div className="container">
        <div className="article-container" {...storyblokEditable(blok)}>
          {articles[0] && articles.map((Article) => (
            <ArticleTeaser Article={Article.content} key={Article.uuid} />
          ))}
        </div>
      </div>
    </AllArticlesWrapper>
  )
}

export default AllArticles;