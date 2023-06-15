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
          <title>Siml.ai</title>
          <meta name="description" content="Landing page for Siml.ai" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="assets/simlai/simlai-logo.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>


      <Layout>
        {!isOpen ? (
          <Header open={isOpen} onClose={handleOpen}/>
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