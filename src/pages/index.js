import React from "react";

import Layout from "../templates/Layout";
import SEO from "../templates/Seo";

import Styles from "../styles/HomePage.module.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className={Styles.container}>
      <h1>Lady-Bites Blog</h1>
      <h2>Eat your Best</h2>
    </header>
  </Layout>
);

export default IndexPage;
