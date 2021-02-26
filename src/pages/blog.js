import React from "react";
import { graphql } from "gatsby";

import Styles from "../styles/BlogPage.module.scss";
import SEO from "../components/seo";

const Blog = () => {
  <SEO title="Blog" />;
  return (
    <section className={Styles.container}>
      <h1>Blog Page</h1>
      <section className={Styles.allPostsContainer}>
        <h2>All Posts</h2>
      </section>
    </section>
  );
};

export default Blog;

export const AllPosts = graphql`
  query GetAllBlogPosts {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          keywordTags
          featuredImage {
            gatsbyImageData(
              width: 250
              height: 150
              placeholder: TRACED_SVG
              layout: FIXED
            )
            title
            description
          }
          attachedToRecipe
          introduction {
            internal {
              content
            }
          }
          body {
            body
          }
        }
      }
    }
  }
`;
