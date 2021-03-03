require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Lady Bites Blog`,
    shortTitle: `Lady Bites`,
    titleTemplate: "%s · Lady Bites Blog",
    description: `Blog website for Lady-Bites Brand - Recipes, Videos & Blogs`,
    image: "./cookie-logo.png",
    author: `Lauren Wilder`,
    siteUrl: `https://ladybites.netlify.app/`,
    image: `./images/cookie-logo.png`,
    keywords: [
      "Profession Pastry Chef",
      "Food Blog",
      "Lauren Lady Bites Blog",
      "Pastry Blog",
      "Cooking Blog",
    ],
    socials: {
      instagram: ``, // tsk todo
      pintrest: ``, // tsk todo
      twitter: `@LaurenLadyBites`,
    },
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.ladybites.netlify.app`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 700,
              withWebp: true,
              loading: "eager",
            },
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     // develop: true, // Enable while using `gatsby develop`
    //     whitelist: ["blockquote"], // Don't remove this selector
    //     // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //   },
    // },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                author
                managingEditor: author
                siteUrl
                site_url: siteUrl
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
                  description: post.introduction.childMarkdownRemark.html,
                  date: post.publishDate,
                  url: `${site.siteMetadata.siteUrl}/blog/${post.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/blog/${post.slug}`,
                  custom_elements: [
                    { "content:encoded": post.body.childMarkdownRemark.html },
                  ],
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
                      introduction {
                        childMarkdownRemark {
                          html
                        }
                      }
                      publishDate(formatString: "MMMM DD, YYYY")
                      body {
                        childMarkdownRemark {
                          html
                        }
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
      resolve: `gatsby-plugin-social9-socialshare`,
      options: {
        content: `c0972104cd9f4db897012e0fc05f2382`,
        async: true,
        defer: true,
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.ladybites.netlify.app",
        sitemap: "https://www.ladybites.netlify.app/sitemap.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
};
