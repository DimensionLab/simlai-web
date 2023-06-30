import { storyblokInit, apiPlugin, getStoryblokApi, StoryblokComponent, useStoryblokState, StoryData } from "@storyblok/react";
import Feature from "../components/storyblok-components/Feature";
import Page from "../components/storyblok-components/Page";
import Grid from "../components/storyblok-components/Grid";
import Teaser from "../components/storyblok-components/Teaser";
import styled from 'styled-components';
import Header from "../components/homepage/Header";
import Layout from "@/components/Layout";
import Footer from "../components/homepage/Footer";
import Article from "../components/storyblok-components/Article";
import AllArticles from "../components/storyblok-components/AllArticles";
import { useEffect, useState } from "react";
import ArticleLoadingSkeleton from "@/components/blog-components/ArticleLoadingSkeleton";
import DropdownMenu from "@/components/homepage/main-components/mobile-components/DropdownMenu";
import Search from "@/components/blog-components/Search";
import Head from "next/head";
import StoryblokContainer from "@/components/blog-components/StoryblokContainer";

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

  .skeleton-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
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

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_API_TOKEN,
  use: [apiPlugin],
  components,
});

export default function Blog( props: any ) {
  const sbStory = useStoryblokState(props.story)
  const [story, setStory] = useState(sbStory);

  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(prevIsOpen =>  {
      return !prevIsOpen;
    });
  }

  useEffect(() => {
    setStory(sbStory);

    // return () => setStory()
  }, [sbStory]);
  

  return (
    <>
      <Head>
            <title>Siml.ai</title>
            <meta name="description" content="Landing page for Siml.ai" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="assets/simlai/simlai-logo.svg" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
        
      <Layout>
          <section className="flex flex-col w-full h-full">
            <div className={`w-full h-full ${!isOpen ? `hidden` : `flex flex-col justify-between`}`}>
              <Header open={!isOpen} onClose={handleOpen}/>      
              <Search/>
              <div className="w-full py-4 pb-12 flex items-center justify-center">
                <div className="flex lg:w-[80%] flex-wrap gap-y-4 py-12 justify-center">
                  <StoryblokContainer storyContent={story.content} keyID={props.keyID}/>
                </div>
              </div>
              <Footer open={!isOpen}/>
            </div>
            
            <div className={`w-full h-full ${isOpen ? `hidden` : `flex flex-col`}`}>
              <DropdownMenu open={!isOpen} onClose={handleOpen}/>
            </div>
          </section>
      </Layout>
    </>
  )
}


export async function getStaticProps() {
  let slug = "blog";
  let sbParams: { version: 'draft' | 'published'} = {
      version: 'draft',
  };
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  
  return {
    props: {
      story: data ? data.story : null,
      keyID: data ? data.story.id : null,
    },
    revalidate: 3600,
  };
}