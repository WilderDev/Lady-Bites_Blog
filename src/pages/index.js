import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Styles from "../styles/HomePage.module.scss";
import { AiFillDownCircle } from "@react-icons/all-files/ai/AiFillDownCircle";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className={Styles.container}>
      <StaticImage
        src="../images/coffee-bg-main-2.jpg"
        alt="Two cups of whip-cream decorated coffee on a wooden table"
        placeholder="blurred"
        layout="fullWidth"
        loading="eager"
        style={{
          maxHeight: "100vh",
          minHeight: "100vh",
          zIndex: "-999",
        }}
        quality={100}
        width="100%"
        height="100%"
      />
      <section className={Styles.heroText}>
        <h1>Lady Bites Blog</h1>
        <h2>
          Happy Belly <span>Whole Heart</span>
        </h2>
        <p>Typeerpye</p>
      </section>
      <a href="#BelowTheFold" className={Styles.downArrow}>
        <AiFillDownCircle className={Styles.arrowIcon} />
      </a>
    </header>
    <section className={Styles.belowFold} id="BelowTheFold">
      <h3>Hey</h3>
    </section>
  </Layout>
);

export default IndexPage;
