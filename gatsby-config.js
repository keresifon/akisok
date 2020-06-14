/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
//const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "akisok",
    subtitle: "Ado ok!",
    footer: "© 2020 akisok.com",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "2v4z45mmn098",
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: "wKYGwe-RUdn2YowInDPfF9yGTLlBUr-oVFHG0TvK9LI",
        downloadLocal: true,
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Droid Sans`,
          `Helvetica`, // you can also specify font weights and styles
          `Raleway`,
        ],
      },
    },
  ],
}
