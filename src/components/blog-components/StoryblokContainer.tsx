import { StoryblokComponent } from "@storyblok/react";

interface StoryblokContainerProps {
    storyContent: any;
    keyID: any;
    categoryProp: string;
}

const StoryblokContainer = (props: StoryblokContainerProps) => {
    return (
        <StoryblokComponent blok={props.storyContent} key={props.keyID} />
    );
}

export default StoryblokContainer;