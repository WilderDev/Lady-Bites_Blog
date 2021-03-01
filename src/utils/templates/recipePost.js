import React from "react";
import { Link, graphql } from "gatsby";
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
    mainImage,
    publishDate,
  } = props.data.contentfulRecipe;
  const { next, previous } = props.pageContext;

  // ! Add connected blog post
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
        <ul className={Styles.tags}>
          {keywordTags.map((tag) => (
            <li>
              <Link to="/recipe">{tag}</Link>
            </li>
          ))}
        </ul>
        <Img
          fixed={mainImage.fixed}
          alt={mainImage.description ? mainImage.description : mainImage.title}
        />
        <small>{publishDate}</small>
        <hr />
        <main>
          {/* <div
            className={Styles.introduction}
            dangerouslySetInnerHTML={{
              __html: introduction.childMarkdownRemark.html,
            }}
          ></div> */}
          <hr />
          {/* <div
            className={Styles.mainText}
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.html,
            }}
          ></div> */}
          <hr />
        </main>
        <aside className={Styles.author}>
          <Link to="/about">
            <h5>Lauren Wilder</h5>
          </Link>
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
                <Link to={`/recipe/${previous.node.slug}`}>
                  <AiOutlineArrowLeft />
                  Prev
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`/recipe/${next.node.slug}`}>
                  Next
                  <AiOutlineArrowRight />
                </Link>
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
      keywordTags
      mainImage {
        fixed(width: 700, height: 250) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
  }
`;
