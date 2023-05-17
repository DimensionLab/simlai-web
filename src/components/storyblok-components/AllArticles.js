import ArticleTeaser from "./ArticleTeaser";
import {
  getStoryblokApi,
  storyblokEditable
} from "@storyblok/react";

import { useState, useEffect } from "react";
import styled from "styled-components";

const AllArticlesWrapper = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    
    .article-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
    }
  }
`;

const AllArticles = ({ blok }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
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
    };
    getArticles();
  }, []);

  return (
    <AllArticlesWrapper>
      <div className="container">
        <div className="article-container" {...storyblokEditable(blok)}>
          { articles[0] && articles.map((Article) => (
            <ArticleTeaser Article={Article.content} key={Article.uuid} />
          ))}
        </div>
      </div>
    </AllArticlesWrapper>
  )
}

export default AllArticles;