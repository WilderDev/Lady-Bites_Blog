import React from "react";

import Styles from "../styles/LearningPage.module.scss";
import SEO from "../components/seo";

const Learning = () => {
  <SEO title="Learning" />;

  return (
    <section className={Styles.container}>
      <h1>Learning Page</h1>
      <h2>Courses, Videos & Informative Blogs</h2>
    </section>
  );
};

export default Learning;
