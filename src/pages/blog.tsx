import { storyblokInit, apiPlugin, getStoryblokApi, StoryblokComponent } from "@storyblok/react";
import Feature from "../components/storyblok-components/Feature";
import Page from "../components/storyblok-components/Page";
import Grid from "../components/storyblok-components/Grid";
import Teaser from "../components/storyblok-components/Teaser";
import styled from 'styled-components';
import Header from "../components/blog-components/Header";
import Layout from "@/components/Layout";
import IntroText from "../components/blog-components/IntroText";
import Footer from "@/components/homepage/Footer";
import Article from "../components/storyblok-components/Article";
import AllArticles from "../components/storyblok-components/AllArticles";
import { useEffect, useState } from "react";

const BlogWrapper = styled.main`
  .placeholder {
    background-color: #1f2021;
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    font-size: 2rem;

    @media (min-width: 768px){
      flex-direction: row;
    }

    a{ 
      text-decoration: none;
      color: white;
      border: 2px solid white;
      padding: 1rem;
      transition: 0.6s;
      border-radius: 10px;

      &:hover {
        color: black;
        background-color: white;
      }
    }
  }

  .loading {
    padding: 5rem;
    height: 80vh;
    font-size: 2rem;
    display: flex;
    align-self: center;
    justify-self: center;
  }
`;
 
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  article: Article,
  'all-articles': AllArticles,
};

export default function Blog() {
  const [story, setStory] = useState<{content: any, id: number} | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return () => {
      window.onpopstate = function(event) {
        window.location.reload();
      };
    };
  }, []);
  
  useEffect(() => {
    storyblokInit({
      accessToken: process.env.NEXT_PUBLIC_API_TOKEN,
      use: [apiPlugin],
      components,
    });
  }, []);
  

  useEffect(() => {
    console.log("inside useEffect on Blog");
    const fetchStory = async () => {
      setIsLoading(true);
      let slug = "blog";
  
      let sbParams: { version: 'draft' | 'published'} = {
          version: 'draft',
      };
  
      const storyblokApi = getStoryblokApi();
      let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  
      setStory(data ? data.story : null);
      setIsLoading(false);
    };
  
    fetchStory();
  
    const handlePopState = () => {
      fetchStory();
    };
  
    window.addEventListener('popstate', handlePopState);
  
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  

  return (
    <BlogWrapper>
      <Layout>
        <Header isArticle={false}/>      
        <IntroText/>
        {isLoading || !story?.content ? (
          <div className="loading">Loading...</div>
        ): (
          <StoryblokComponent blok={story.content} />
        )}
        <Footer/>
      </Layout>
    </BlogWrapper>
  )
}
