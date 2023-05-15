import { storyblokInit, apiPlugin, getStoryblokApi, StoryblokComponent } from "@storyblok/react";
import Feature from "../components/storyblok-components/Feature";
import Page from "../components/storyblok-components/Page";
import Grid from "../components/storyblok-components/Grid";
import Teaser from "../components/storyblok-components/Teaser";
import styled from 'styled-components';
import Header from "../components/blog-components/Header";
import Layout from "@/components/Layout";
import IntroText from "../components/blog-components/IntroText";

const BlogWrapper = styled.main`
  background-color: #222530;

  .placeholder {
    background-color: gray;
    width: 100%;
    height: 100vh;
  }
`;
 
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_API_TOKEN,
  use: [apiPlugin],
  components,
});

export default function Blog(props: any) {
  const story = props.story;

  return (
    <BlogWrapper>
      <Layout>
            <Header/>
            <IntroText/>
            {/* <StoryblokComponent blok={story.content} /> */}
            <div className="placeholder"></div>
      </Layout>
    </BlogWrapper>
  )
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "blog";
 
  // load the draft version
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
    revalidate: 3600, // revalidate every hour
  };
}