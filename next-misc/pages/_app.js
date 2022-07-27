import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import '../styles/layout.css'

function MyApp({ Component, pageProps }) {


  if(Component.getLayout){ // component has own layout definition?
    return Component.getLayout(<Component {...pageProps} />) // set custom layout
  }
  return ( // return default layout with header and footer
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;