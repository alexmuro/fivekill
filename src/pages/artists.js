import React from 'react'
import Link from 'gatsby-link'
import Screen from '../components/Screen'

export default function Index({ data }) {
  const { edges: artists } = data.allMarkdownRemark;
  return (
	  <section className='content'>
      <Screen title={'Artists'} subtitle={' on fivekill'}>
	      {artists
	        .filter(post => post.node.frontmatter.name)
	        .map(({ node: post }) => {
	          return (
	           	<Link to={post.frontmatter.path} className="details__post type__facebook" >
		        		<span className="post__author">
		        			<img className="post__thumbnail processed" src="" />
		        			<h4>{post.frontmatter.name}</h4>{post.frontmatter.band}
		        			<span className="post__time">{post.frontmatter.date}</span>
		        		</span>
		        		<span className="post__message">
		        			{post.excerpt}
		        		</span>
        		</Link>
	          );
        	})
	      }
      </Screen>
	  </section>
	)
}

export const pageQuery = graphql`
  query ArtistQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
	        name
	        title
	        website
	        facebook
	        twitter
	        press_landscape
	        press_sq
          }
        }
      }
    }
  }
`;