module.exports = {
  siteMetadata: {
    title: `SevenHills Tirupati | Frontpage of Tirupati & Tirumala | India`,
    description: `We are best combination of Social and devotional crowd`,
    author: "Sevenhills Tirupati",
    keywords:"Sevenhills tirupati,Tirupati,Tirumala,tirupati balaji, Balaji Venkateswara",
    image:"./src/images/ST.jpg",
    url:"https://www.sevenhillstirupati.com",
    siteUrl:"https://www.sevenhillstirupati.com",
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
        apiURL: `http://localhost:1337`,
        queryLimit: 10000, 
        contentTypes: [`blogposts`,`featureds`,`titleimages`,`corona-cases`],
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
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Bungee','Suez One','Russo One','Staatliches']
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve:`gatsby-plugin-robots-txt`,
      options:{
        query: `{
            site {
            siteMetadata {
            siteUrl
          }
         }        
        }`
      },
    },
  ],
}
