import Head from "next/head";
import Layout from "./Layout";
import Header from "./homepage/Header";
import Main from "./homepage/Main";
import Footer from "./homepage/Footer";
import { useState } from "react";
import DropdownMenu from "./homepage/main-components/mobile-components/DropdownMenu";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Head>
          <title>Siml.ai - Platform for fast AI-driven physics simulations</title>
          <meta property="og:image" content="https://simlai-9yqr5fk40-dimensionlab.vercel.app/assets/simlai/url-preview.png"/>
          <meta property="og:title" content="Siml.ai - Platform for fast AI-driven physics simulations"/>
          <meta property="twitter:image" content="https://simlai-9yqr5fk40-dimensionlab.vercel.app/assets/simlai/url-preview.png"/>
          <meta property="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@siml_ai" />
          <meta property="og:description" content="Platform for fast AI-driven physics simulations" />
          <meta name="description" content="Platform for fast AI-driven physics simulations" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        {!isOpen ? (
          <Header open={isOpen} onClose={handleOpen} whichSubpage=""/>
          // Main, Footer potentially could be here, but it works as it is now, so...
        ) : (
          <DropdownMenu open={isOpen} onClose={handleOpen}/>
        )}
        <Main open={isOpen}/>
        <Footer open={isOpen}/>
      </Layout>
    </>
  );
}