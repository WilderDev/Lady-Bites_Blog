import React from "react";

import Styles from "../styles/LearningPage.module.scss";
import SEO from "../components/seo";
import AltLayout from "../components/altLayout";

const Learning = () => {
  return (
    <AltLayout>
      <SEO title="Learning" />;
      <section className={Styles.container}>
        <h1>Learning Page</h1>
        <h2>Courses, Videos & Informative Blogs</h2>
      </section>
    </AltLayout>
  );
};

export default Learning;
