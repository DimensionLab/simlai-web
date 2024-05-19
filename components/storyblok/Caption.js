import { storyblokEditable } from "@storyblok/react/rsc";
 
const Caption = ({ blok }) => (
  <figcaption className="text-muted text-sm" {...storyblokEditable(blok)}>
    {blok.content}
  </figcaption>
);
 
export default Caption;