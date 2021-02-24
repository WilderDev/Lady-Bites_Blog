import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Styles from "../styles/HomePage.module.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className={Styles.container}>
      <h1>Lady Bites Blog</h1>
      <h2>What That Mouth Do!</h2>
    </header>
  </Layout>
);

export default IndexPage;
