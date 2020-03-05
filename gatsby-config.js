module.exports = {
  siteMetadata: {
    title: 'Spaceshiplabs',
    description: 'Spacehiplabs Marketing digital y Web Development.',
    author: '@spaceshiplabs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Spaceshiplabs',
        short_name: 'Spaceshiplabs',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [
          { userAgent: '*', allow: '/' },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: 'sitemap.xml',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
