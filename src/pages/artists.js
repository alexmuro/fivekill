import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Screen from '../components/Screen'
import '../components/Screen/screen_artist.scss'



export default function Index({ data }) {
  const { edges: releases } = data.allMarkdownRemark;
  
  return (
    <section className='content'>
      <Screen title={'Artists'} subtitle={' on fivekill'}>
        <section className='artistContainer'>
          {releases
            .filter(post => post.node.frontmatter.name.length > 0)
            .map(({ node: post }) => {
              let image = post.frontmatter.pressPhoto
                ? <Img className=" processed" sizes={post.frontmatter.pressPhoto.childImageSharp.sizes} />
                : <img className="artist__thumbnail processed" alt="Artist" src="" />
              return (
                <Link to={post.frontmatter.path} className="details__artist" >
                  <div className='img__artist'> 
                    {image}
                  </div>
                  <div className='content__artist'>
                    
                      <span className='title__artist'>{post.frontmatter.name}</span> 
                    
                  </div>
                  
                </Link>
              );
            })
          }
        </section>
      </Screen>
    </section>
  )
}

export const pageQuery = graphql`
  query ArtisteQuery {
    allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___name]},
        filter: {fileAbsolutePath: {regex : "\/artists/"} }
      ) {
      edges {
        node {
          id
          frontmatter {
            name
            path
            pressPhoto{
            	childImageSharp {
              	resize(width: 800, height: 600) {
                	src
              }
              sizes(maxWidth: 800, maxHeight:600, cropFocus:CENTER) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
}`;