import Head from 'next/head';
import Layout from '../../components/Layout';

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
import Header from '../../components/homepage/Header';
import Footer from '@/components/homepage/Footer';
import { GetStaticPropsContext } from 'next';
import { useState } from 'react';
import DropdownMenu from '@/components/homepage/main-components/mobile-components/DropdownMenu';
import Page from '@/components/storyblok-components/Page';
import dynamic from 'next/dynamic';

const UniPost = dynamic(() =>
  import('../../components/storyblok-components/UniPost')
);

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  'uni-post': UniPost,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_API_TOKEN,
  use: [apiPlugin],
  components,
});

interface PageProps {
  story: StoryData<any>;
  keyID: any;
  video: any
}

const WHICH_VERSION = process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ? "published" : "draft";

export default function UniversityPost({ story, keyID, video }: PageProps) {
  story = useStoryblokState(story);
  
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Head>
            <title>{story ? `Siml.ai University - ${story.name}` : 'Siml.ai - University Post'}</title>
            <meta property="og:image" content={story.content.thumbnail.filename ? story.content.thumbnail.filename : `https://siml.ai/assets/simlai/url-preview.png`}/>
            <meta property="og:title" content={story ? `Siml.ai - ${story.name}` : `Siml.ai - University Post`}/>
            <meta property="og:url" content="https://siml.ai/"/>
            <meta property="twitter:image" content={story.content.thumbnail.filename ? story.content.thumbnail.filename : `https://siml.ai/assets/simlai/url-preview.png`}/>
            <meta property="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@siml_ai" />
            <meta name="description" content="Read this Siml.ai University post!" />
            <meta property="og:description" content="Read this Siml.ai University post!"/>
      </Head>

      <Layout>
        {isOpen ? (
          <section className='w-full h-full flex flex-col justify-between'>
            <Header open={!isOpen} onClose={handleOpen} whichSubpage="article"/>
            <UniPost blok={story.content} key={keyID} videoData={video}/>
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
    version: WHICH_VERSION,
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/university/${slug}`, sbParams);

  const videoLinkUrl = data.story.content.video_link.url;

  const videoData = await getVideoData(videoLinkUrl);

  const videoDataJson = {
    url: videoData.url,
    title: videoData.title
  }

  return {
    props: {
      story: data ? data.story : false,
      keyID: data ? data.story.id : false,
      video: videoDataJson
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

const getVideoData = async (videoLinkUrl: string) => {
  const response = await fetch(`https://www.youtube.com/oembed?url=${videoLinkUrl}`)
  const data = await response.json();

  const srcRegex = /src="([^"]+)"/;
  const matches = data.html.match(srcRegex);
  
  let srcValue = "";
  if (matches && matches.length >= 2) {
      srcValue = matches[1];
  } else {
      console.log("No 'src' attribute found or the URL is invalid.");
  }

  const info = {
      url: srcValue,
      title: data.title
  }

  return info;
}