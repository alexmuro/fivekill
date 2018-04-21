module.exports = {
  siteMetadata: {
    title: 'Fivekill Records',
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
  	{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/releases`,
        name: 'releases',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/artists`,
        name: 'artists',
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
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};
