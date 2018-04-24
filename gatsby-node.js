

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
  	
    const slug = createFilePath({ node, getNode, basePath: 'content' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    // Attach thumbnail's ImageSharp node by public path if necessary
    if (typeof node.frontmatter.coverImage === 'string') {
      // Find absolute path of linked path
      const pathToFile = path
        .join(__dirname, node.frontmatter.coverImage)
        .split(path.sep)
        .join('/');

        

      // Find ID of File node
      const fileNode = getNodes().find(n => n.absolutePath === pathToFile);
      

      if (fileNode != null) {
        // Find ImageSharp node corresponding to the File node
        const imageSharpNodeId = fileNode.children.find(n => n.endsWith('>> ImageSharp'));
        const imageSharpNode = getNodes().find(n => n.id === imageSharpNodeId);

        console.log('--------------------')
		console.log('on create node', pathToFile)
		console.log(imageSharpNodeId)
		console.log('--------------------')

        // Add ImageSharp node as child
        createParentChildLink({ parent: node, child: imageSharpNode });
      }
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