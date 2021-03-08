import React from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image";
import { StaticImage } from "gatsby-plugin-image";

import Styles from "../../styles/RecipePost.module.scss";
import AltLayout from "../../components/altLayout";
import SEO from "../../components/seo";
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import { AiOutlineArrowLeft } from "@react-icons/all-files/ai/AiOutlineArrowLeft";

const RecipePost = (props) => {
  const {
    title,
    keywordTags,
    dietaryTags,
    mainImage,
    publishDate,
    ingredients,
    instructions,
    feedsAmount,
    nutritionInfo,
    totalTime,
  } = props.data.contentfulRecipe;
  const { next, previous } = props.pageContext;

  return (
    <AltLayout>
      <SEO
        title={title}
        author="Lauren Wilder"
        // description={introduction.childMarkdownRemark.html}
        isArticle={true}
        keywords={keywordTags}
      />
      <article className={Styles.container}>
        <h1>{title}</h1>
        <small>
          <b>Feeds:</b> {feedsAmount} people
        </small>
        <small>
          <b>Time to Make:</b> {totalTime} min
        </small>
        <ul className={Styles.tags}>
          {keywordTags &&
            keywordTags.map((tag) => (
              <li>
                <AniLink fade to="/recipes">
                  {tag}
                </AniLink>
              </li>
            ))}
          {dietaryTags &&
            dietaryTags.map((tag) => (
              <li>
                <AniLink fade to="/recipes">
                  {tag}
                </AniLink>
              </li>
            ))}
        </ul>
        <div className={Styles.heroImg}>
          <Img
            fluid={mainImage.fluid}
            alt={
              mainImage.description ? mainImage.description : mainImage.title
            }
          />
        </div>
        <small>
          <b>Published:</b> {publishDate}
        </small>
        <hr />
        <main>
          <section className={Styles.topInfo}>
            <article>
              <h3 className={Styles.heading}>Ingredients</h3>
              <ul className={Styles.ingredients}>
                {ingredients.map((ing) => (
                  <li>{ing}</li>
                ))}
              </ul>
            </article>
            {nutritionInfo && (
              <article>
                <h3 className={Styles.heading}>Nutrition</h3>
                <ul className={Styles.nutrition}>
                  {nutritionInfo.map((inf) => (
                    <li>{inf}</li>
                  ))}
                </ul>
              </article>
            )}
          </section>
          <hr />
          <h2 className={Styles.headingB}>Instructions</h2>
          <ul className={Styles.mainText}>
            {instructions.map((ins, index) => (
              <li>
                <b> Step {index + 1}:</b> {ins}
              </li>
            ))}
          </ul>
          <hr />
        </main>
        <aside className={Styles.author}>
          <AniLink paintDrip hex="#fff691" to="/about">
            <h5>Lauren Wilder</h5>
          </AniLink>
          <StaticImage
            src="../../images/angel.jpg"
            alt="Headshot of Lauren Wilder"
            placeholder="blurred"
            layout="fixed"
            width={75}
            height={75}
          />
          <p>
            <i>Professional Pasty Chef & Happy Goofball</i>
          </p>
        </aside>
        <nav role="navigation" aria-label="Recipe Posts">
          <ul>
            <li>
              {previous && (
                <AniLink
                  swipe
                  direction="left"
                  to={`/recipe/${previous.node.slug}`}
                >
                  <AiOutlineArrowLeft />
                  Prev
                </AniLink>
              )}
            </li>
            <li>
              {next && (
                <AniLink
                  swipe
                  direction="right"
                  to={`/recipe/${next.node.slug}`}
                >
                  Next
                  <AiOutlineArrowRight />
                </AniLink>
              )}
            </li>
          </ul>
        </nav>
      </article>
    </AltLayout>
  );
};

export default RecipePost;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulRecipe(slug: { eq: $slug }) {
      # // ! attachedToRecipe
      publishDate(formatString: "MMMM DD, YYYY")
      slug
      title
      totalTime
      feedsAmount
      ingredients
      instructions
      nutritionInfo
      dietaryTags
      keywordTags
      mainImage {
        fluid(maxWidth: 700) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;
