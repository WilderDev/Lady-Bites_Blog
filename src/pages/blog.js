import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Styles from "../styles/BlogPage.module.scss";
import SEO from "../components/seo";
import AltLayout from "../components/altLayout";

const Blog = ({ data }) => {
  const allPosts = data.allContentfulBlogPost;

  return (
    <AltLayout>
      <SEO
        title="Blog"
        // description
        //  keywords
      />
      ;
      <section className={Styles.container}>
        <h1>Ladies Blog Posts</h1>
        <section className={Styles.allPostsContainer}>
          <h2>All {allPosts.totalCount} Posts</h2>
          <hr />
          <section className={Styles.allArticles}>
            {allPosts.edges.map(({ node: post }) => (
              <article key={post.id}>
                <Link to={`/blog/${post.slug}`}>
                  <Img
                    fixed={post.featuredImage.fixed}
                    alt={post.featuredImage.description}
                  />
                  <small>Published: {post.publishedDate}</small>
                  <h3>{post.title}</h3>
                </Link>
              </article>
            ))}
          </section>
        </section>
      </section>
    </AltLayout>
  );
};

export default Blog;

export const AllPosts = graphql`
  query GetAllBlogPosts {
    allContentfulBlogPost(
      limit: 500
      sort: { fields: publishDate, order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          title
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          keywordTags
          featuredImage {
            title
            description
            fixed(height: 200, width: 250) {
              ...GatsbyContentfulFixed_tracedSVG
            }
            # gatsbyImageData(
            #   width: 250
            #   height: 150
            #   placeholder: TRACED_SVG
            #   layout: FIXED
            # )
          }
        }
      }
    }
  }
`;
