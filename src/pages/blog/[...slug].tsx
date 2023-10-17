import Head from 'next/head';
import Layout from '../../components/Layout';

import {
  useStoryblokState,
  getStoryblokApi,
  storyblokInit,
  apiPlugin,
  StoryData,
} from '@storyblok/react';
import Feature from '@/components/storyblok-components/Feature';
import Grid from '@/components/storyblok-components/Grid';
import Teaser from '@/components/storyblok-components/Teaser';
import Header from '../../components/homepage/Header';
import Footer from '@/components/homepage/Footer';
import { GetStaticPropsContext } from 'next';
import { useEffect, useState } from 'react';
import DropdownMenu from '@/components/homepage/main-components/mobile-components/DropdownMenu';
import Page from '@/components/storyblok-components/Page';
import Article from '../../components/storyblok-components/Article';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  article: Article,
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

const WHICH_VERSION = process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ? "published" : "draft";

export default function BlogPost({ story, keyID }: PageProps) {
  story = useStoryblokState(story);
  const [currURL, setCurrURL] = useState('');
  
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const currURL = window.location.href;
    setCurrURL(currURL);
  }, []);

  return (
    <div>
      <Head>
            <title>{story ? `Siml.ai - ${story.name}` : 'Siml.ai - Blog Article'}</title>
            <meta property="og:image" content={story.content.image.filename ? story.content.image.filename : `https://siml.ai/assets/simlai/url-preview.png`}/>
            <meta property="og:title" content={story ? `Siml.ai - ${story.name}` : `Siml.ai - Blog Article`}/>
            <meta property="og:url" content={currURL}/>
            <meta property="twitter:image" content={story.content.image.filename ? story.content.image.filename : `https://siml.ai/assets/simlai/url-preview.png`}/>
            <meta property="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@siml_ai" />
            <meta name="description" content="Read this blog post on Siml.ai blog!" />
            <meta property="og:description" content="Read this blog post on Siml.ai blog!"/>
      </Head>

      <Layout>
        {isOpen ? (
          <section className='w-full flex flex-col justify-between h-full'>
            <Header open={!isOpen} onClose={handleOpen} whichSubpage="article"/>
            <Article blok={story.content} key={keyID} keyID={keyID}/>
            <Footer open={!isOpen} key={keyID * 95845}/>
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
    version: WHICH_VERSION,
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/blog/${slug}`, sbParams);

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
    version: WHICH_VERSION,
  });

  let paths: any = [];
  Object.keys(data.links).forEach((linkKey) => {
    const slug = data.links[linkKey].slug;
    
    if(slug.includes('blog/') || slug.includes('university/')) {
      return;
    }

    if(data.links[linkKey].is_folder) {
      return;
    }

    let splittedSlug = slug.split('/');
    // console.log(splittedSlug);
    paths.push({ params: { slug: splittedSlug } });
  });  

  return {
    paths: paths,
    fallback: 'blocking',
  };
}
