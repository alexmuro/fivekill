import React from 'react'
import Link from 'gatsby-link'
import Screen from '../components/Screen'

export default function Index({ data }) {
  const { edges: releases } = data.allMarkdownRemark;
  return (
	  <section className='content'>
      <Screen title={'Releases'} subtitle={' on fivekill'}>
	      {releases
	        .filter(post => post.node.frontmatter.title.length > 0)
	        .map(({ node: post }) => {
	          return (
	           	<Link to={post.frontmatter.path} className="details__post type__facebook" >
		        		<span className="post__author">
		        			<img className="post__thumbnail processed" src="" />
		        			<h4>{post.frontmatter.title}</h4>{post.frontmatter.band}
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
  query ReleaseQuery {
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
          }
        }
      }
    }
  }
`;