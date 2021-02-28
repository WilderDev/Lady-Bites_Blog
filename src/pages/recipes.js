import React from "react";

import Styles from "../styles/RecipesPage.module.scss";
import SEO from "../components/seo";
import AltLayout from "../components/altLayout";

const Recipes = () => {
  return (
    <AltLayout>
      <SEO
        title="Recipes"
        description={"Lady Bites Blog Recipes: Lady Bites Blog"}
        isArticle={false}
        keywords={[
          "Lady Bites Blog",
          "All Recipes Lady Bites Blog",
          "All Lady Bites Recipes",
          "Lauren Wilder Recipes",
        ]}
        // ! TSK image
      />
      ;
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
