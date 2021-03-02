import React from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
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
        description={"Lady Bites Blog All Posts: Lady Bites Blog"}
        isArticle={false}
        keywords={[
          "Lady Bites Blog",
          "All Articles Lady Bites Blog",
          "All Lady Bites Blog Posts",
        ]}
      />
      ;
      <section className={Styles.container}>
        <h1>Ladies Bites Blog</h1>
        <section className={Styles.allPostsContainer}>
          <h2>({allPosts.totalCount} Posts)</h2>
          <hr />
          <section className={Styles.allArticles}>
            {allPosts.edges.map(({ node: post }) => (
              <article key={post.id}>
                <AniLink
                  cover
                  direction="left"
                  duration={3}
                  bg={`url(${post.featuredImage.file.url}) center / cover no-repeat fixed padding-box content-box white`}
                  to={`/blog/${post.slug}`}
                >
                  <Img
                    fixed={post.featuredImage.fixed}
                    alt={post.featuredImage.description}
                  />
                  <small>
                    Published: <strong>{post.publishDate}</strong>
                  </small>
                  <h3>{post.title}</h3>
                </AniLink>
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
            fixed(height: 175, width: 325) {
              ...GatsbyContentfulFixed_tracedSVG
            }
            file {
              url
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
