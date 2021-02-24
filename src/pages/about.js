import React from "react";

import Layout from "../utils/templates/Layout";
import SEO from "../utils/templates/Seo";

import Styles from "../styles/AboutPage.module.scss";

const About = () => (
  <Layout>
    <SEO title="About" />
    <header className={Styles.container}>
      <h1>Hi from the About Page</h1>
      <p>I Lady. I Bite things.</p>
    </header>
  </Layout>
);

export default About;
