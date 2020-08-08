module.exports = {
  siteMetadata: {
    title: `SevenHills Tirupati | Tirupati | India`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://www.sevenhillstirupati.com`,
      stripQueryString: true,
    },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-174931186-1",
        head: true,
        anonymize:true,
        respectDNT:true,
        pageTransitionDelay:0,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://sevenhillscms.herokuapp.com/`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`blogposts`,`featured-contents`],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon:`./src/images/logo.png` 
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
