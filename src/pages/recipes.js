import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Styles from "../styles/RecipesPage.module.scss";
import SEO from "../components/seo";
import AltLayout from "../components/altLayout";

const Recipes = ({ data }) => {
  const allRecipes = data.allContentfulRecipe;

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
      />
      ;
      <section className={Styles.container}>
        <h1>Recipes Page</h1>
        <section className={Styles.allRecipeContainer}>
          <h2>({allRecipes.totalCount} Posts)</h2>
          <hr />
          <section className={Styles.allArticles}>
            {allRecipes.edges.map(({ node: recipe }) => (
              <article key={recipe.id}>
                <Link to={`/recipe/${recipe.slug}`}>
                  <Img
                    fixed={recipe.mainImage.fixed}
                    alt={recipe.mainImage.description}
                  />
                  <small>
                    Published: <strong>{recipe.publishDate}</strong>
                  </small>
                  <h3>{recipe.title}</h3>
                </Link>
              </article>
            ))}
          </section>
        </section>
      </section>
    </AltLayout>
  );
};

export default Recipes;

// {
//   /* // ! USe THIS: https://codepen.io/blindingstars/pen/vEQORr */
// }
export const AllRecipes = graphql`
  query GetAllRecipes {
    allContentfulRecipe(limit: 500, sort: { fields: publishDate, order: ASC }) {
      totalCount
      edges {
        node {
          id
          title
          slug
          totalTime
          publishDate(formatString: "MMMM DD, YYYY")
          keywordTags
          mainImage {
            title
            description
            fixed(height: 150, width: 300) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;
