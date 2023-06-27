import { storyblokEditable } from "@storyblok/react";
import { FeatureStoryblok } from "../../../component-types-sb";
 
const Feature = ({ blok }: FeatureStoryblok) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);
 
export default Feature;