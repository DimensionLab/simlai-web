import { StoryblokComponent } from "@storyblok/react";
import { useEffect } from "react";

interface StoryblokContainerProps {
    storyContent: any;
}

const StoryblokContainer = (props: StoryblokContainerProps) => {
    return (
        <StoryblokComponent blok={props.storyContent}/>
    );
}

export default StoryblokContainer;