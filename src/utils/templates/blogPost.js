import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { StaticImage } from "gatsby-plugin-image";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import Styles from "../../styles/BlogPost.module.scss";
import AltLayout from "../../components/altLayout";
import SEO from "../../components/seo";

const BlogPost = ({ data }) => {
  const {
    title,
    keywordTags,
    introduction,
    featuredImage,
    mainText,
  } = data.contentfulBlogPost;

  const Bold = ({ children }) => <span className="bold">{children}</span>;
  const Text = ({ children }) => <p className="align-center">{children}</p>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        );
      },
    },
  };

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
        <main>{renderRichText(mainText.raw)}</main>
        <aside className={Styles.author}>
          <StaticImage
            src="../images/angel.jpg"
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
      mainText {
        raw
        
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
