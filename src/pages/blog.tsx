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
import Link from "next/link";
import AllArticles from "../components/storyblok-components/AllArticles";
import { useEffect } from "react";

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

export default function Blog(props: any) {
  const story = props.story;
  console.log(story.content);

  useEffect(() => {
    return () => {
      window.onpopstate = function(event) {
        window.location.reload();
      };
    };
  }, []);

  return (
    <BlogWrapper>
      <Layout>
            <Header/>
            <IntroText/>
            {/* <StoryblokComponent blok={story.content} /> */}
            {/* <div className="placeholder">
              <Link href={"blog/article-1"}>Article 1</Link>
              <Link href={"blog/article-2"}>Article 2</Link>
              <Link href={"blog/article-3"}>Article 3</Link>
            </div> */}
            <StoryblokComponent blok={story.content} />
            <Footer/>
      </Layout>
    </BlogWrapper>
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
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}