import React from "react";
import { Link, graphql } from "gatsby";
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
    // !! tsk attachedToRecipe,
  } = props.data.contentfulBlogPost;
  const { next, previous } = props.pageContext;

  // ! Add connected recipe
  return (
    <AltLayout>
      <SEO
        title={title}
        author="Lauren Wilder"
        description={introduction.childMarkdownRemark.html}
        isArticle={true}
        keywords={keywordTags}
      />
      <article className={Styles.container}>
        <h1>{title}</h1>
        <ul className={Styles.tags}>
          {keywordTags.map((tag) => (
            <li>
              <Link to="/blog">{tag}</Link>
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
        <nav role="navigation" aria-label="Blog Posts">
          <ul>
            <li>
              {previous && (
                <Link to={`/blog/${previous.node.slug}`}>
                  <AiOutlineArrowLeft />
                  Prev
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`/blog/${next.node.slug}`}>
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
        fluid(maxWidth: 700) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;
