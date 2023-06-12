import Head from "next/head";
import Layout from "./Layout";
import Header from "./homepage/Header";
import Main from "./homepage/Main";
import Footer from "./homepage/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Siml.ai</title>
        <meta name="description" content="Landing page for Siml.ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/simlai/simlai-logo.svg" />
      </Head>

      <Layout>
        <Header/>
        <Main/>
        <Footer/>
      </Layout>
    </>
  );
}