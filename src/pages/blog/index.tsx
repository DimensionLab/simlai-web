import { storyblokInit, apiPlugin, getStoryblokApi, useStoryblokState } from "@storyblok/react";
import Feature from "../../components/storyblok-components/Feature";
import Page from "../../components/storyblok-components/Page";
import Grid from "../../components/storyblok-components/Grid";
import Teaser from "../../components/storyblok-components/Teaser";
import Header from "../../components/homepage/Header";
import Layout from "@/components/Layout";
import Footer from "../../components/homepage/Footer";
import Article from "../../components/storyblok-components/Article";
import AllArticles from "../../components/storyblok-components/AllArticles";
import { useEffect, useState } from "react";
import DropdownMenu from "@/components/homepage/main-components/mobile-components/DropdownMenu";
import Head from "next/head";
import StoryblokContainer from "@/components/blog-components/StoryblokContainer";

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

export default function Blog( props: any ) {
  const sbStory = useStoryblokState(props.story)
  // const [story, setStory] = useState(sbStory);
  console.log(AllArticles)

  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(prevIsOpen =>  {
      return !prevIsOpen;
    });
  }

  // useEffect(() => {
  //   setStory(sbStory);

  //   // return () => setStory()
  // }, [sbStory]);

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
              <StoryblokContainer storyContent={sbStory.content} keyID={props.keyID}/>
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