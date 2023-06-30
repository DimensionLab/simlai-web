import { StoryblokComponent } from "@storyblok/react";
import { useEffect } from "react";

interface StoryblokContainerProps {
    storyContent: any;
    keyID: any;
}

const StoryblokContainer = (props: StoryblokContainerProps) => {
    return (
        <StoryblokComponent blok={props.storyContent} key={props.keyID}/>
    );
}

export default StoryblokContainer;