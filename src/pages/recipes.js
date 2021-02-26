import React from "react";

import Styles from "../styles/RecipesPage.module.scss";
import SEO from "../components/seo";
import AltLayout from "../components/altLayout";

const Recipes = () => {
  return (
    <AltLayout>
      <SEO title="Recipes" />;
      <section className={Styles.container}>
        <h1>Recipes Page</h1>
      </section>
    </AltLayout>
  );
};

export default Recipes;

// {
//   /* // ! USe THIS: https://codepen.io/blindingstars/pen/vEQORr */
// }
