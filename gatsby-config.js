module.exports = {
  siteMetadata: {
    title: `Lady Bites Blog`,
    shortTitle: `Lady Bites`,
    titleTemplate: "%s · Lady Bites Blog",
    description: `Blog website for Lady-Bites Brand - Recipes, Videos & Blogs`,
    image: "./cookie-logo.png", // path to image in static folder
    author: `@LaurenLadyBites`, // tsk: ask for her twitter handle,
    siteUrl: `https://ladybites.netlify.app/`,
    socials: {
      instagram: `tsk`,
      pintrest: `tsk`,
    },
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-readingtime-contentful",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                keywords
                author {
                  name
                  summary
                }
                managingEditor: author {name}
                webMaster: author {name}
                siteUrl
                site_url: siteUrl
                categories: keywords,
                image: image
                image_url: image
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              return allContentfulBlogPost.edges.map(({ node: post }) => {
                return {
                  title: post.title,
                  description: post.subTitle,
                  date: post.publishDate,
                  // author: `${post.author.firstName} ${post.author.lastName}`,
                  // categories: site.siteMetadata.keywords.join(", "),
                  url: `${site.siteMetadata.siteUrl}/blog/${post.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/blog/${post.slug}`,
                  custom_elements: [{ "content:encoded": post.body.body }],
                };
              });
            },
            query: `
              {
                 allContentfulBlogPost(sort: {fields: publishDate, order: ASC}) {
                   edges {
                    node {
                      slug
                      title
                      subTitle
                      publishDate(formatString: "MMMM DD, YYYY")
                      body {
                        body
                      }
                      author {
                        firstName
                        lastName
                      }
                      
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Lady Bites Blog - RSS",
            match: "^/blog/",
          },
        ],
      },
    },
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
