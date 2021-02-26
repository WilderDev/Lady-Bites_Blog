import React from "react";

import Styles from "../styles/LearningPage.module.scss";
import SEO from "../components/seo";
import Layout from "../components/layout";

const Learning = () => {
  return (
    <Layout>
      <SEO title="Learning" />;
      <section className={Styles.container}>
        <h1>Learning Page</h1>
        <h2>Courses, Videos & Informative Blogs</h2>
      </section>
    </Layout>
  );
};

export default Learning;
