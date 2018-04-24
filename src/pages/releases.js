import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Screen from '../components/Screen'
import '../components/Screen/screen_release.scss'

export default function Index({ data }) {
  const { edges: releases } = data.allMarkdownRemark;
  
  return (
	  <section className='content'>
      <Screen title={'Releases'} subtitle={' on fivekill'}>
	      {releases
	        .filter(post => post.node.frontmatter.title.length > 0)
	        .map(({ node: post }) => {
            let image = post.frontmatter.coverImage
              ? <Img className=" processed" sizes={post.frontmatter.coverImage.childImageSharp.sizes} />
              : <img className="release__thumbnail processed" src="" />
	          return (
	           	<Link to={post.frontmatter.path} className="details__release" >
		        		<div className='img__release'> 
                  {image}
                </div>
                <div className='content__release'>
                  <div className='title_artist__release'>
		        		    <span className='title__release'>{post.frontmatter.title}</span>
                    <br />
                    <span className='artist__release'>{post.frontmatter.artist}</span>
                  </div>
                  <div className='releaseNumber__release'>{post.frontmatter.releaseNumber}</div>
                  
		        			<div className="date__release">Street Date: {post.frontmatter.date}</div>
		              <div className="post__message">
		        			 &nbsp;&nbsp;{post.excerpt}
		        		  </div>
                </div>
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
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date]},
        filter: {fileAbsolutePath: {regex : "\/releases/"} }
      ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            artist
            releaseNumber
            coverImage {
            childImageSharp {
              resize(width: 768, height: 768) {
                src
              }
              sizes(maxWidth: 786) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
}
`;