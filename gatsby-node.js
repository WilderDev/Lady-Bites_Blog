const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(
    `
      query {
        allContentfulBlogPost {
          edges {
            previous {
              slug
            }
            next {
              slug
            }
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
      const allPosts = res.data.allContentfulBlogPost.edges;

      allPosts.forEach(({ node }, index) => {
        createPage({
          path: `/blog/${node.slug}`,
          component: BlogPostTemplate,
          context: {
            slug: node.slug,
            id: node.id,
            next: index === 0 ? null : allPosts[index - 1],
            previous: index === res.length - 1 ? null : allPosts[index + 1],
          },
        });
      });
    })
    .catch((err) => {
      console.log(`Error! Cannot retrieve Contentful data.`, err);
    });
};
