import React from "react";

import Styles from "../styles/RecipesPage.module.scss";
import SEO from "../components/seo";
import Layout from "../components/layout";

const Recipes = () => {
  return (
    <Layout>
      <SEO title="Recipes" />;
      <section className={Styles.container}>
        <h1>Recipes Page</h1>
      </section>
    </Layout>
  );
};

export default Recipes;
