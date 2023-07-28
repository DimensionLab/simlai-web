import { storyblokInit, apiPlugin, getStoryblokApi, useStoryblokState } from "@storyblok/react";
import Feature from "../../components/storyblok-components/Feature";
import Page from "../../components/storyblok-components/Page";
import Grid from "../../components/storyblok-components/Grid";
import Teaser from "../../components/storyblok-components/Teaser";
import Header from "../../components/homepage/Header";
import Layout from "@/components/Layout";
import Footer from "../../components/homepage/Footer";
import { useState } from "react";
import DropdownMenu from "@/components/homepage/main-components/mobile-components/DropdownMenu";
import Head from "next/head";
import Article from "@/components/storyblok-components/Article";
import dynamic from "next/dynamic";

const AllArticles = dynamic(() =>
  import('../../components/storyblok-components/AllArticles')
);

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

const WHICH_VERSION = process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ? "published" : "draft";

const Blog = ( props: any ) => {
  const sbStory = useStoryblokState(props.story)

  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(prevIsOpen =>  {
      return !prevIsOpen;
    });
  }

  return (
    <>
      <Head>
        <title>Siml.ai - Blog</title>
        <meta property="og:image" content="https://siml.ai/assets/simlai/url-preview.png"/>
        <meta property="og:title" content="Siml.ai - Blog"/>
        <meta property="og:url" content="https://siml.ai/"/>
        <meta property="twitter:image" content="https://siml.ai/assets/simlai/url-preview.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@siml_ai" />
        <meta name="description" content="Read the latest articles from Siml.ai blog!" />
        <meta property="og:description" content="Read the latest articles from Siml.ai blog!"/>
      </Head>
      <Layout>
          <section className="flex flex-col w-full h-full">
            <div className={`w-full h-full ${!isOpen ? `hidden` : `flex flex-col justify-between`}`}>
              <Header open={!isOpen} onClose={handleOpen} whichSubpage="blog"/>      
              {/* <StoryblokContainer storyContent={sbStory.content} keyID={props.keyID}/> */}
              <AllArticles blok={sbStory.content} />
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

export default Blog;

export async function getStaticProps() {
  let slug = "blog";
  let sbParams: { version: 'draft' | 'published'} = {
      version: WHICH_VERSION,
  };
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  
  return {
    props: {
      story: data ? data.story : null,
      keyID: data ? data.story.id : null,
    },
    revalidate: 300,
  };
}