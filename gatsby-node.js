

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");
const createFilePath = require("gatsby-source-filesystem").createFilePath


exports.onCreateNode = ({
  node, getNode, getNodes, boundActionCreators,
}) => {
  const { createNodeField, createParentChildLink } = boundActionCreators;
  //console.log('getNodes()', getNodes().map(n => n.absolutePath))
  if (node.internal.type === 'MarkdownRemark') {
  	// console.log('--------------------')
  	// console.log('show me the node', node)
  	// console.log('--------------------')
    // Attach thumbnail's ImageSharp node by public path if necessary
    if (typeof node.frontmatter.coverImage === 'string') {
      	node.frontmatter.coverImage = node.frontmatter.coverImage.replace('/static/', '../../static/')
    }

    if (typeof node.frontmatter.pressPhoto === 'string') {
      	node.frontmatter.pressPhoto = node.frontmatter.pressPhoto.replace('/static/', '../../static/')
    }
 
  }
};

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
	            path
	            title
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