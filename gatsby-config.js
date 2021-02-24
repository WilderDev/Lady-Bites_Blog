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
        description: `Create Blazing-Fast Blogs in Record Time.`,
        start_url: `/`,
        background_color: `#fdfff5`,
        theme_color: `#ABEDFF`,
        display: `standalone`,
        orientation: `natural`,
        icon: `src/images/icon/android-chrome-512x512.png`,
        icons: [
          {
            src: `src/utils/icons/apple-touch-icon.png`,
            sizes: `64x64`,
            type: `image/png`,
          },
          {
            src: `src/utils/icons/maskable-icon.png`,
            sizes: `53x53`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `src/utils/icons/android-chrome-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
            purpose: `any`,
          },
          {
            src: `src/utils/icons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `any`,
          },
        ],
        lang: `en-US`,
        dir: `ltr`,
        scope: `.`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
};
