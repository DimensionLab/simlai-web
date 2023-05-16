import Head from 'next/head';
import Layout from '../components/Layout';

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
  storyblokInit,
  apiPlugin,
  StoryData,
} from '@storyblok/react';
import Feature from '@/components/storyblok-components/Feature';
import Grid from '@/components/storyblok-components/Grid';
import Teaser from '@/components/storyblok-components/Teaser';
import Article from '@/components/storyblok-components/Article';
import Header from '@/components/blog-components/Header';
import Footer from '@/components/homepage/Footer';
import { GetStaticPropsContext } from 'next';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  Article: Article,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_API_TOKEN,
  use: [apiPlugin],
  components,
});

interface PageProps {
  story: StoryData<any>;
}

export default function Page({ story  }: PageProps) {
  story = useStoryblokState(story);

  return (
    <div>
      <Head>
        <title>{story ? story.name : 'My Site'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Header/>
        <StoryblokComponent blok={story.content} />
        <Footer/>
      </Layout>
    </div>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  let slug: string;
  if (Array.isArray(params?.slug)) {
    slug = params?.slug.join('/') || '';
  } else {
    throw new Error('Slug is required');
  }

  let sbParams = {
    version: 'draft', // or 'published'
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

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get('cdn/links/', {
    version: 'draft',
  });

  let paths: any = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (
      data.links[linkKey].is_folder || 
      data.links[linkKey].slug === 'blog' || 
      data.links[linkKey].slug === 'blog/') {
        return;
      }
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split('/');
    // console.log(splittedSlug);
  
    paths.push({ params: { slug: splittedSlug } });
  });  

  return {
    paths: paths,
    fallback: false,
  };
}
