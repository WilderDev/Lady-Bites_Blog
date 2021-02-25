import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Styles from "../styles/HomePage.module.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className={Styles.container}>
      <StaticImage
        src="../images/cups-of-coffee-bg.jpg"
        alt="Two cups of whip-cream decorated coffee on a wooden table"
        placeholder="blurred"
        layout="fullWidth"
        loading="eager"
        style={{ maxHeight: "100vh", minHeight: "100vh", zIndex: "-2" }}
        transformOptions={{ shadow: "string" }}
        quality={100}
        objectFit
        objectPosition
      />
      <section className={Styles.heroText}>
        <h1>Lady Bites Blog</h1>
        <h2>What That Mouth Do!</h2>
      </section>
    </header>
  </Layout>
);

export default IndexPage;
