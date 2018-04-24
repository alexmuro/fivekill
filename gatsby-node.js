/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  // const ReleaseTemplate =
  const Templates = {
  	 'release': path.resolve(`src/templates/release.js`),
  	 'artist' : path.resolve(`src/templates/artist.js`),
  	 'news' : path.resolve(`src/templates/news.js`)
  }

  return graphql(`
  	{
	    release: allMarkdownRemark(
	    	sort: { order: DESC, fields: [frontmatter___date]},
	    	filter: {fileAbsolutePath: {regex : "\/releases/"} }
	  	)
	  	{
	      edges {
	        node {
	          excerpt(pruneLength: 250)
	          html
	          id
	          frontmatter {
		        title
		        date(formatString: "MMMM DD, YYYY")
		        path
		        artist
		        releaseNumber
		        bandcamp
		        spotify
		      }
	        }
	      }
	    }
	    artist: allMarkdownRemark(
	    	sort: { order: ASC, fields: [frontmatter___name]},
	    	filter: {fileAbsolutePath: {regex : "\/artists/"} }
	  	)
	  	{
	      edges {
	        node {
	          excerpt(pruneLength: 250)
	          html
	          id
	          frontmatter {
	            date
	            name
	            path
	            title
	            type
	          }
	        }
	      }
	    }
	    news: allMarkdownRemark(
	    	sort: { order: DESC, fields: [frontmatter___date]},
	    	filter: {fileAbsolutePath: {regex : "\/news/"} }
	  	)
	  	{
	      edges {
	        node {
	          excerpt(pruneLength: 250)
	          html
	          id
	          frontmatter {
	            date
	            artist
	            path
	            title
	            type
	          }
	        }
	      }
	    }
	  }`
	)
	.then(result => {
	  if (result.errors) {
	    return Promise.reject(result.errors);
	  }

	  Object.keys(result.data).forEach(type => {
	  	result.data[type]
  		.edges
	    .forEach(({ node }) => {
	    	console.log(type,node.frontmatter)
	      createPage({
	        path: node.frontmatter.path,
	        component: Templates[type],
	        context: {} // additional data can be passed via context
	      });
	    });


	  })
	  	
	})
};



 // You can delete this file if you're not using it