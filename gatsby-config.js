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
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-90744232-2',
          cookieName: 'gatsby-gdpr-google-analytics',
          anonymize: true,
          allowAdFeatures: false
        },
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-offline`,
  ],
}
