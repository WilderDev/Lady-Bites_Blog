module.exports = {
  siteMetadata: {
    title: `Lady Bites Blog`,
    description: `Blog website for Lady-Bites Brand - Recipes, Videos & Blogs`,
    author: `@LaurenLadyBites`, // tsk: ask for her twitter handle,
    siteUrl: `https://ladybites.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lady Bites Blog`,
        short_name: `Lady Bites`,
        start_url: `/`,
        background_color: `#663399`, // tsk
        theme_color: `#663399`, // tsk
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
};
