import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { GridStoryblok } from "../../../component-types-sb";
 
const Grid = ({ blok }: GridStoryblok) => {
  return (
    <div className="grid" {...storyblokEditable(blok)} key={blok._uid}>
      {blok.columns.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default Grid;