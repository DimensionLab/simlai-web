import { StoryblokComponent } from "@storyblok/react";
import { useEffect } from "react";

interface StoryblokContainerProps {
    storyContent: any;
    keyID: any;
    categoryProp: string;
}

const StoryblokContainer = (props: StoryblokContainerProps) => {
    useEffect(() => {
        console.log("cont: ", props.categoryProp)
    })

    const blokk = props.storyContent;
    const catPro = props.categoryProp;
    const car = {
        blok: blokk,
        categoryProp: catPro
    }

    console.log(car);

    return (
        // <StoryblokComponent blok={props.storyContent} key={props.keyID} categoryProp={props.categoryProp}/>
        <StoryblokComponent blok={car} key={props.keyID} />
    );
}

export default StoryblokContainer;