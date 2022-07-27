// imports without '../' because of absolut imports defined in 'jsconfig.json'
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "styles/globals.css";
import "styles/layout.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    // component has own layout definition?
    return Component.getLayout(<Component {...pageProps} />); // set custom layout
  }
  return (
    // return default layout with header and footer
    <>
      <Head>
        <title>This is a Next.js Application</title>
        <meta name="description" content="Next.js is a great web-framework" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
