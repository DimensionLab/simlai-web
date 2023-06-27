import { storyblokEditable } from "@storyblok/react";
import { TeaserStoryblok } from "../../../component-types-sb";
 
const Teaser = ({ blok }: TeaserStoryblok) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};
 
export default Teaser;