const config = require('./src/config');

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.sergiodev.com",
    description: "Sergio Villarroel Full Stack Software engineer",
    title: "Sergio's Website'",
    author: "Sergio Villarorel",
    image: '/images/og.png',
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'SergioVillarroel',
        short_name: 'SergioVillarroel',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/logo.svg',
      },
    },
  ],
};
