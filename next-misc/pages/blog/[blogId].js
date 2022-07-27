import React from "react";
import Head from "next/head";

function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <h1 className="content">
        {process.env.NEXT_PUBLIC_ANALYTICS_ID}
        {/*{process.env.DB_USER} doesnt work because it has not perfix 'NEXT_PUBLIC' */}
      </h1>
    </>
  );
}

export default Blog;

export async function getStaticPaths() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  console.log(
    `Connecting to database with username ${user} with password ${password}`
  );
  return {
    paths: [{ params: { blogId: "1" } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {
      title: "Article Title",
      description: "Article Description",
    },
  };
}
