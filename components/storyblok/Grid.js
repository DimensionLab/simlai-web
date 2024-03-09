import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
 
const Grid = ({ blok }) => {
  return (
    <div  {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default Grid;