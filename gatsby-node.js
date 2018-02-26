/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const ReleaseTemplate = path.resolve(`src/templates/release.js`);
  return graphql(`
  	{
	    allMarkdownRemark(
	      sort: { order: DESC, fields: [frontmatter___date] }
	      limit: 1000
	    ) {
	      edges {
	        node {
	          excerpt(pruneLength: 250)
	          html
	          id
	          frontmatter {
	            date
	            band
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
	  result.data.allMarkdownRemark.edges
	    .forEach(({ node }) => {
	      createPage({
	        path: node.frontmatter.path,
	        component: ReleaseTemplate,
	        context: {} // additional data can be passed via context
	      });
	    });
	})
};



 // You can delete this file if you're not using it