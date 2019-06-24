module.exports = {
  siteMetadata: {
    title: `Fivekill Records`,
  },
  plugins: [
  	`gatsby-plugin-netlify-cms`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: `assets`,
      },
    },
  	{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/releases`,
        name: `releases`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/artists`,
        name: `artists`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/news`,
        name: `news`,
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
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};
