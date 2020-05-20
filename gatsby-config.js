module.exports = {
  siteMetadata: {
    title: `Alex Gascon`,
    name: `Alex Gascon`,
    author: `Alex Gascon`,
    description: `Personal blog of Alex Gascon Bononad`,
    siteUrl: `https://blog.alexgascon.com`,
    hero: {
      heading: `Alex Gascon`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/AlexGasconB`,
      },
      {
        name: `github`,
        url: `https://github.com/AlexGascon`,
      },
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              height: 400
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        authorsPage: true,
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        rootPath: "/",
        sources: {
          local: true,
          contentful: false
        },
      },
    },
  ],
}
