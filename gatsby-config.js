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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-90744232-2`,
        head: true,
      },
    },
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-offline`,
  ],
}
