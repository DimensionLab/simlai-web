import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { PageStoryblok } from "../../../component-types-sb";
 
const Page = ({ blok }: PageStoryblok) => (
  <main {...storyblokEditable(blok)}>
    {blok.body && blok.body.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);
 
export default Page;
