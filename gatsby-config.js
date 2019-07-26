module.exports = {
  siteMetadata: {
    name: "Sizable",
    tagline: "Sizable"
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-XXXXXXX",
        head: true
      }
    }
  ]
};
