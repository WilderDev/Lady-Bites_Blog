import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { StaticImage } from "gatsby-plugin-image";

import Styles from "../../styles/BlogPost.module.scss";
import AltLayout from "../../components/altLayout";
import SEO from "../../components/seo";

const BlogPost = ({ data }) => {
  const {
    title,
    keywordTags,
    introduction,
    featuredImage,
    body,
    publishDate,
    // !! tsk attachedToRecipe,
  } = data.contentfulBlogPost;

  return (
    <AltLayout>
      <SEO
        title={title}
        author="Lauren Wilder"
        description={introduction.childMarkdownRemark.html}
        // !tsk  keywords
      />
      <article className={Styles.container}>
        <h1>{title}</h1>
        {/* // ! tsk Tags */}
        <Img
          fixed={featuredImage.fixed}
          alt={
            featuredImage.description
              ? featuredImage.description
              : featuredImage.title
          }
        />
        <small>{publishDate}</small>
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
        </main>
        <aside className={Styles.author}>
          <Link to="/about">
            <h5>Lauren Wagner</h5>
          </Link>
          <StaticImage
            src="../../images/angel.jpg"
            alt="Headshot of Lauren Wilder"
            placeholder="blurred"
            layout="fixed"
            width={75}
            height={75}
          />
          <p>Professional Pasty Chef & Happy Goofball</p>
        </aside>
      </article>
    </AltLayout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      attachedToRecipe
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
        fixed(width: 700, height: 250) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
  }
`;

// ! Add connected recipe
