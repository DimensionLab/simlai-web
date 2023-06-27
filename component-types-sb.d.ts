import {StoryblokStory} from 'storyblok-generate-ts'

export interface AllArticlesStoryblok {
  title?: string;
  _uid: string;
  component: "all-articles";
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface ArticleStoryblok {
  title?: string;
  date?: string;
  subtitle?: string;
  content?: RichtextStoryblok;
  image?: AssetStoryblok;
  teaser?: string;
  _uid: string;
  component: "Article";
  [k: string]: any;
}

export interface FeatureStoryblok {
  name?: string;
  test_text_area?: string;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: any[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}
