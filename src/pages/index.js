import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Styles from "../styles/HomePage.module.scss";
import { AiFillDownCircle } from "@react-icons/all-files/ai/AiFillDownCircle";
import { AiFillUpCircle } from "@react-icons/all-files/ai/AiFillUpCircle";

const IndexPage = ({ data }) => {
  const allRecipes = data.allContentfulRecipe;

  return (
    <Layout>
      <SEO
        title="Home"
        description={"Lady Bites Home Landing Page: Lady Bites Blog"}
        isArticle={false}
      />
      <header className={Styles.container} id="Top">
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
        <a
          href="#BelowTheFold"
          className={Styles.downArrow}
          name="arrow"
          rel="search"
          type="button"
          title="down arrow"
        >
          <AiFillDownCircle className={Styles.arrowIcon} />
        </a>
      </header>
      <section className={Styles.belowFold} id="BelowTheFold">
        <h3>Ladies Top Choice Recipes</h3>
        <section className={Styles.allArticles}>
          {allRecipes.edges.map(({ node: recipe }) => (
            <article key={recipe.id}>
              <Link to={`/recipe/${recipe.slug}`}>
                <Img
                  fixed={recipe.mainImage.fixed}
                  alt={recipe.mainImage.description}
                />
                <small>
                  <ul>
                    {recipe.dietaryTags.map((tag) => (
                      <li>{tag}</li>
                    ))}
                  </ul>
                </small>
                <h3>{recipe.title}</h3>
                <div className={Styles.lowTags}>
                  <small>Feeds: {recipe.feedsAmount}</small>
                  <small>Time: {recipe.totalTime}m</small>
                </div>
              </Link>
            </article>
          ))}
        </section>
        <a
          href="#BlogPosts"
          className={Styles.downArrow}
          name="arrow"
          rel="search"
          type="button"
          title="down arrow"
        >
          <AiFillDownCircle className={Styles.arrowIcon} />
        </a>
      </section>
      <section className={Styles.homeBlog} id="BlogPosts">
        <h3>Most Recent Posts</h3>
        <a
          href="#Top"
          className={Styles.downArrow}
          name="arrow"
          rel="search"
          type="button"
          title="up arrow"
        >
          <AiFillUpCircle className={Styles.arrowIcon} />
        </a>
      </section>
    </Layout>
  );
};
export default IndexPage;

export const AllRecipes = graphql`
  query GetAllRecipesHome {
    allContentfulRecipe(limit: 3, sort: { fields: publishDate, order: ASC }) {
      edges {
        node {
          id
          title
          slug
          totalTime
          dietaryTags
          feedsAmount
          totalTime
          mainImage {
            title
            description
            fixed(height: 175, width: 325) {
              ...GatsbyContentfulFixed_tracedSVG
            }
            file {
              url
            }
          }
        }
      }
    }
  }
`;
