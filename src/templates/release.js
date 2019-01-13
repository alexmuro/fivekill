import React from "react";
import Helmet from "react-helmet";
import Img from 'gatsby-image'
import Screen from '../components/Screen'
import SectionHeader from '../components/Layout/SectionHeader'
const stores = ['spotify','bandcamp','youtube','itunes','play']
// import '../css/blog-post.css'; // make it pretty!

export default function Template({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
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
}

export const pageQuery = graphql`
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
