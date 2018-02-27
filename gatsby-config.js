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
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [] 
      }
    },
  ]
};
