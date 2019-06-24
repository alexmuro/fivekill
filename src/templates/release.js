import React from "react";
import Helmet from "react-helmet";
import Img from 'gatsby-image'
import Screen from '../components/Screen'
import SectionHeader from '../components/Layout/SectionHeader'
// import '../css/blog-post.css'; // make it pretty!

import { StaticQuery, graphql } from "gatsby"
const stores = ['spotify','bandcamp','youtube','itunes','play']

export default function NewsTemplate() {
  return ( 
    <StaticQuery
      query={pageQuery}
      render={(data) => {
        const { markdownRemark: post } = data; // data.markdownRemark holds our post data
         let image = post.frontmatter.coverImage
                    ? <Img className=" processed" alt='Album Cover' sizes={post.frontmatter.coverImage.childImageSharp.sizes} />
                    : <img className="release__thumbnail processed" alt='Album Cover' src="" />

         let socials = {}

         stores.forEach(key => {
           if(post.frontmatter[key] && post.frontmatter[key].length > 0){
              socials[key] = post.frontmatter[key]
           }
         
         })
        
        return (
          <section className='content'>
            <Screen title={post.frontmatter.title} subtitle={` by ${post.frontmatter.artist}`} socials={socials}>
              <Helmet title={`${post.frontmatter.title} - Fivekill`} />
              <div className="details__release" >
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
                    <div style={{display:'flex', width: '100%', alignItems: 'stretch'}}>
                    {
                      stores.map(key => {
                        return (
                          <a
                            href={post.frontmatter[key]} style={{textAlign: 'center'}} target="_blank" rel="noopener noreferrer">
                          
                            <img className='social-icon-svg' style={{width: '100%', padding: 15, fill:'#ccc'}} alt={key} src={`/images/social/${key}.svg`} />
                              <br/><span style={{fontSize: '10px'}}>{key}</span>
                          </a>
                        ) 
                      })
                    }
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-post">
                <SectionHeader title='ALBUM BLURB' />
                <div
                  className="album-release-content"
                  style={{textAlign:'justify'}}
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
              </div>
            </Screen>
          </section>
        );
      }}
    />
  )
}

const pageQuery = graphql`
  query ReleaseByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        artist
        releaseNumber
        bandcamp
        spotify
        itunes
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
`;
