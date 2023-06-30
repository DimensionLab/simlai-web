import { storyblokEditable } from "@storyblok/react";
import { FeatureStoryblok } from "../../../component-types-sb";
 
const Feature = ({ blok }: FeatureStoryblok) => (
  <div className="column feature" {...storyblokEditable(blok)} key={blok._uid}>
    {blok.name}
  </div>
);
 
export default Feature;