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
        allContentfulRecipe {
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

      const RecipeTemplate = path.resolve(
        "./src/utils/templates/recipePost.js"
      );
      const allRecipes = res.data.allContentfulRecipe.edges;

      const BlogPostTemplate = path.resolve(
        "./src/utils/templates/blogPost.js"
      );
      const allBlogs = res.data.allContentfulBlogPost.edges;

      allBlogs.forEach(({ node }, index) => {
        createPage({
          path: `/blog/${node.slug}`,
          component: BlogPostTemplate,
          context: {
            slug: node.slug,
            id: node.id,
            next: index === 0 ? null : allBlogs[index - 1],
            previous: index === res.length - 1 ? null : allBlogs[index + 1],
          },
        });
      });

      allRecipes.forEach(({ node }, index) => {
        createPage({
          path: `/recipe/${node.slug}`,
          component: RecipeTemplate,
          context: {
            slug: node.slug,
            id: node.id,
            next: index === 0 ? null : allRecipes[index - 1],
            previous: index === res.length - 1 ? null : allRecipes[index + 1],
          },
        });
      });
    })
    .catch((err) => {
      console.log(`Error! Cannot retrieve Contentful data.`, err);
    });
};
