import { SbBlokData } from "@storyblok/react";

export type RootStory = {
  name: string;
  created_at: string;
  published_at: string;
  id: number;
  uuid: string;
  content: {
    _uid: string;
    body: any[];
    component: string;
    _editable: string;
  };
  slug: string;
  full_slug: string;
  sort_by_date: any;
  position: number;
  tag_list: any[];
  is_startpage: boolean;
  parent_id: number;
  meta_data: any;
  group_id: string;
  first_published_at: string;
  release_id: any;
  lang: string;
  path: any;
  alternates: any[];
  default_full_slug: any;
  translated_slugs: any;
}

export type RootData = {
  story: RootStory;
  cv: number;
  rels: any[];
  links: any[];
}

export type AllArticlesBlok = {
  _uid: string;
  title: string;
  component: string;
  _editable: string;
}

export type CaseStudyStory = {
  name: string;
  created_at: string;
  published_at: string;
  id: number;
  uuid: string;
  content: {
    _uid: string;
    date: string;
    image: any;
    title: string;
    description: string;
    author: string;
    content: any;
    category: any[];
    keywords: string;
    component: string;
    _editable: SbBlokData;
  };
  slug: string;
  full_slug: string;
  sort_by_date: any;
  position: number;
  tag_list: any[];
  is_startpage: boolean;
  parent_id: number;
  meta_data: any;
  group_id: string;
  first_published_at: string;
  release_id: any;
  lang: string;
  path: any;
  alternates: any[];
  default_full_slug: any;
  translated_slugs: any;
}

export type CaseStudyCard = {
  _uid: string;
  title: string;
  date: string;
  image: {
    filename: string;
    alt: string;
  };
  category: string | string[];
  slug: string;
  published_at: string;
}
