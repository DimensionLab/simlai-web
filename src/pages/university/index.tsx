import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import DropdownMenu from "@/components/homepage/main-components/mobile-components/DropdownMenu";
import Layout from "@/components/Layout";
import AllUniversityPosts from "@/components/storyblok-components/AllUniversityPosts";
import Article from "@/components/storyblok-components/Article";
import Feature from "@/components/storyblok-components/Feature";
import Grid from "@/components/storyblok-components/Grid";
import Page from "@/components/storyblok-components/Page";
import Teaser from "@/components/storyblok-components/Teaser";
import MainUni from "@/components/university-components/MainUni";
import { apiPlugin, getStoryblokApi, storyblokInit, useStoryblokState } from "@storyblok/react";
import Head from "next/head";
import { useState } from "react";

const components = {
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    page: Page,
    article: Article,
    'all-university-posts': AllUniversityPosts,
  };
  
  storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_API_TOKEN,
    use: [apiPlugin],
    components,
  });

const WHICH_VERSION = process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ? "published" : "draft";

const University = (props: any) => {
    const [isOpen, setIsOpen] = useState(true);
    const sbStory = useStoryblokState(props.story);

    const handleOpen = () => {
        setIsOpen(prevIsOpen =>  {
        return !prevIsOpen;
        });
    }
    return (
        <>
            <Head>
                <title>Siml.ai - University</title>
                <meta property="og:image" content="https://siml.ai/assets/simlai/url-preview.png"/>
                <meta property="og:title" content="Siml.ai - University"/>
                <meta property="og:url" content="https://siml.ai/"/>
                <meta property="twitter:image" content="https://siml.ai/assets/simlai/url-preview.png"/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@siml_ai" />
                <meta name="description" content="Learn everything about Siml.ai and find out how to utilize it to achieve incredible things!" />
                <meta property="og:description" content="Learn everything about Siml.ai and find out how to utilize it to achieve incredible things!"/>
            </Head>
            <Layout>
                <main className={`w-full h-full flex flex-col justify-between items-center min-h-screen ${!isOpen ? `hidden` : ``}`}>
                    <Header open={!isOpen} onClose={handleOpen} whichSubpage={"university"}/>
                    <MainUni story={sbStory}/>
                    <Footer open={!isOpen}/>
                </main>
                <div className={`w-full h-full ${isOpen ? `hidden` : `flex flex-col`}`}>
                    <DropdownMenu open={!isOpen} onClose={handleOpen}/>
                </div>  
            </Layout>
        </>
    )
}

export default University;

export async function getStaticProps() {
    let slug = "university";
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