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
import Header from '../components/homepage/Header';
import Footer from '@/components/homepage/Footer';
import { GetStaticPropsContext } from 'next';
import { useEffect, useState } from 'react';
import DropdownMenu from '@/components/homepage/main-components/mobile-components/DropdownMenu';
import Page from '@/components/storyblok-components/Page';
import AllArticles from '@/components/storyblok-components/AllArticles';

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

interface PageProps {
  story: StoryData<any>;
  keyID: any;
}

export default function BlogPost({ story, keyID }: PageProps) {
  story = useStoryblokState(story);
  
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Head>
            <title>{story ? `Siml.ai - ${story.name}` : 'Siml.ai - Blog Article'}</title>
            <meta name="description" content="Article on Siml.ai Blog" />
            <meta property="og:image" content="https://siml.ai/assets/simlai/simlai-logo.svg"/>
      </Head>

      <Layout>
        {isOpen ? (
          <section className='w-full'>
            <Header open={!isOpen} onClose={handleOpen} whichSubpage="article"/>
            <StoryblokComponent blok={story.content} key={keyID}/>
            <Footer open={!isOpen}/>
          </section>
        ) : (
          <DropdownMenu open={!isOpen} onClose={handleOpen}/>
        )}
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
    version: 'published', // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      keyID: data ? data.story.id : false,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get('cdn/links/', {
    version: 'published',
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
    fallback: 'blocking',
  };
}
