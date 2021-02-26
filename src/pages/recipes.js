import React from "react";

import Styles from "../styles/RecipesPage.module.scss";
import SEO from "../components/seo";

const Recipes = () => {
  <SEO title="Recipes" />;

  return (
    <section className={Styles.container}>
      <h1>Recipes Page</h1>
    </section>
  );
};

export default Recipes;
