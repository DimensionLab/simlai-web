import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import React from "react";
 
interface BodyItemType {
  _uid: string;
  title: string;
  component: string;
  _editable: string;
  [key: string]: any;
}

interface BlokType {
  _uid: string;
  body: BodyItemType[];
  component: string;
  _editable: string;
  [key: string]: any;
}

interface PageProps {
  blok: BlokType;
}

const Page: React.FC<PageProps> = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
};

export default Page;