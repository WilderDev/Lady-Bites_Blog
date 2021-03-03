import React from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image";
import { StaticImage } from "gatsby-plugin-image";

import Styles from "../../styles/BlogPost.module.scss";
import AltLayout from "../../components/altLayout";
import SEO from "../../components/seo";
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import { AiOutlineArrowLeft } from "@react-icons/all-files/ai/AiOutlineArrowLeft";

const BlogPost = (props) => {
  const {
    title,
    keywordTags,
    introduction,
    featuredImage,
    body,
    publishDate,
    attachedToRecipe,
    connectedRecipe,
  } = props.data.contentfulBlogPost;
  const { next, previous } = props.pageContext;

  return (
    <AltLayout>
      <SEO
        title={title}
        author="Lauren Wilder"
        description={introduction.childMarkdownRemark.html}
        isArticle={true}
        keywords={keywordTags}
        image={featuredImage.resize.src}
      />
      <article className={Styles.container}>
        <h1>{title}</h1>
        <ul className={Styles.tags}>
          {keywordTags.map((tag) => (
            <li>
              <AniLink fade to="/blog">
                {tag}
              </AniLink>
            </li>
          ))}
        </ul>
        <div className={Styles.heroImg}>
          <Img
            fluid={featuredImage.fluid}
            alt={
              featuredImage.description
                ? featuredImage.description
                : featuredImage.title
            }
          />
        </div>
        <small>{publishDate}</small>
        {attachedToRecipe && (
          <AniLink
            cover
            bg="#b8caff"
            className={Styles.recLink}
            to={`/recipe/${connectedRecipe.slug}`}
          >
            View the {connectedRecipe.title} Full Recipe!
          </AniLink>
        )}
        <hr />
        <main>
          <div
            className={Styles.introduction}
            dangerouslySetInnerHTML={{
              __html: introduction.childMarkdownRemark.html,
            }}
          ></div>
          <hr />
          <div
            className={Styles.mainText}
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.html,
            }}
          ></div>
          <hr />
          {attachedToRecipe && (
            <AniLink
              cover
              bg="#b8caff"
              className={Styles.recLink}
              to={`/recipe/${connectedRecipe.slug}`}
            >
              View the {connectedRecipe.title} Full Recipe!
            </AniLink>
          )}
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
        <nav role="navigation" aria-label="Blog Posts">
          <ul>
            <li>
              {previous && (
                <AniLink
                  swipe
                  direction="left"
                  to={`/blog/${previous.node.slug}`}
                >
                  <AiOutlineArrowLeft />
                  Prev
                </AniLink>
              )}
            </li>
            <li>
              {next && (
                <AniLink swipe direction="right" to={`/blog/${next.node.slug}`}>
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

export default BlogPost;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      attachedToRecipe
      connectedRecipe {
        title
        slug
      }
      publishDate(formatString: "MMMM DD, YYYY")
      slug
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      keywordTags
      introduction {
        childMarkdownRemark {
          html
        }
      }
      featuredImage {
        resize {
          src
        }
        fluid(maxWidth: 700) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;
