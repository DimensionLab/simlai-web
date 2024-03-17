import { storyblokEditable } from "@storyblok/react/rsc";
 
const Feature = ({ blok }) => (
  <div  {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);
 
export default Feature;