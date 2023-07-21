import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import DropdownMenu from "@/components/homepage/main-components/mobile-components/DropdownMenu";
import Layout from "@/components/Layout";
import MainUni from "@/components/university-components/MainUni";
import Head from "next/head";
import { useState } from "react";

const University = () => {
const [isOpen, setIsOpen] = useState(true);

const handleOpen = () => {
    setIsOpen(prevIsOpen =>  {
    return !prevIsOpen;
    });
}
    return (
        <>
            <Head>
                <title>Siml.ai - University</title>
                <meta property="og:image" content="https://siml.ai/assets/simlai/url-preview.png"/>
                <meta property="og:title" content="Siml.ai - University"/>
                <meta property="og:url" content="https://siml.ai/"/>
                <meta property="twitter:image" content="https://siml.ai/assets/simlai/url-preview.png"/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@siml_ai" />
                <meta name="description" content="Learn everything about Siml.ai and find out how to utilize it to achieve incredible things!" />
                <meta property="og:description" content="Learn everything about Siml.ai and find out how to utilize it to achieve incredible things!"/>
            </Head>
            <Layout>
                <main className={`w-full h-full flex flex-col justify-between items-center min-h-screen ${!isOpen ? `hidden` : ``}`}>
                    <Header open={!isOpen} onClose={handleOpen} whichSubpage={"university"}/>
                    <MainUni/>
                    <Footer open={!isOpen}/>
                </main>
                <div className={`w-full h-full ${isOpen ? `hidden` : `flex flex-col`}`}>
                    <DropdownMenu open={!isOpen} onClose={handleOpen}/>
                </div>  
            </Layout>
        </>
    )
}

export default University;