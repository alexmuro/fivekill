import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Screen from '../components/Screen'
import '../components/Screen/screen_release.scss'

import { StaticQuery, graphql } from "gatsby"

export default function Index() {
  return (
    <StaticQuery
      query={pageQuery}
      render={(data) => {
        const { edges: news } = data.allMarkdownRemark;
  
        return (
      	  <section className='content'>
            <Screen title={'News'}>
      	      {news
      	        .filter(post => post.node.frontmatter.title.length > 0)
      	        .map(({ node: post }) => {
                  let image = post.frontmatter.coverImage
                    ? <Img className=" processed" sizes={post.frontmatter.coverImage.childImageSharp.sizes} />
                    : <img className="release__thumbnail processed" alt='news cover' src="" />
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
                        
      		        			<div className="date__release"><strong> {post.frontmatter.date}</strong></div>
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
      }}
    />
	)
}


const pageQuery = graphql`
  query NewsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/news/"} },
      sort: {fields: [frontmatter___date], order: DESC},
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            coverImage {
		          childImageSharp {
		            
		            sizes(maxWidth: 786,maxHeight: 786) {
		              ...GatsbyImageSharpSizes
		            }
		          }
		        }
          }
          id
          excerpt(pruneLength: 500)
        }
      }
    }
  }
`;