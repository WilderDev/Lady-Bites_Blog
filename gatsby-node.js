const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(
    `
      query {
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  )
    .then((res) => {
      if (res.errors) {
        console.log(`Error retrieving Contentful data`, res.errors);
      }

      const BlogPostTemplate = path.resolve(
        "./src/utils/templates/blogPost.js"
      );

      res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
          path: `/blog/${edge.node.slug}`,
          component: BlogPostTemplate,
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        });
      });
    })
    .catch((err) => {
      console.log(`Error! Cannot retrieve Contentful data.`, err);
    });
};
