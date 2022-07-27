import React from "react";
import Footer from "../components/layout/Footer";
import Head from 'next/head'

function About() {
  return (
    <>
    <h1 className="content">About</h1>

    </>
  
  );
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
