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
  } = data.contentfulBlogPost;

  return (
    <AltLayout>
      <SEO
        title={title}
        author="Lauren Wilder"
        description={introduction.introduction}
        // ! keywords
      />
      <article className={Styles.container}>
        <h1>{title}</h1>
        {/* Tags */}
        <Img
          fixed={featuredImage.fixed}
          alt={
            featuredImage.description
              ? featuredImage.description
              : featuredImage.title
          }
        />
        <hr />
        <main>{body.body}</main>
        <aside className={Styles.author}>
          <StaticImage
            src="../../images/angel.jpg"
            alt="Headshot of Lauren Wilder"
            placeholder="blurred"
            layout="fixed"
            width={100}
            height={100}
          />
          <h5>Lauren Wagner</h5>
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
        body
      }
      keywordTags
      introduction {
        introduction
      }
      featuredImage {
        fixed(width: 800, height: 300) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
  }
`;

// ! Add connected recipe
