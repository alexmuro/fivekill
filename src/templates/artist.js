import React from "react";
import Helmet from "react-helmet";
import Img from 'gatsby-image'
import Screen from '../components/Screen'
import SectionHeader from '../components/Layout/SectionHeader'
const stores = ['spotify','bandcamp','youtube','itunes','play']
// import '../css/blog-post.css'; // make it pretty!

export default function ArtistTemplate({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
    console.log('artist data',data)
    let image = post.frontmatter.pressPhoto
              ? <Img className=" processed" sizes={post.frontmatter.pressPhoto.childImageSharp.sizes} />
              : <img className="release__thumbnail processed" src="" />

    let socials = {}

    stores.forEach(key => {
      if(post.frontmatter[key] && post.frontmatter[key].length > 0){
        socials[key] = post.frontmatter[key]
      }
   })
  
  return (
    <section className='content'>
      <Screen title={post.frontmatter.name} socials={socials}>
        <Helmet title={`${post.frontmatter.name} - Fivekill`} />
        <div className="details__artist" >
          <div className='img__release'> 
            {image}
          </div>
          <div className='content__release'>
              <div className='artist__release'>Website: </div>
              <div className='artist__release'>Bandcamp: </div>
              <div className='artist__release'>Booking: </div>
              <div className='artist__release'>Press: </div>
            </div>
          </div>
        
        <div className="blog-post">
          <SectionHeader title='ARTIST BIO' />
          <div
            className="album-release-content"
            style={{textAlign:'justify'}}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <SectionHeader title='Tour Dates' />
          <SectionHeader title='Releases' />
        </div>
      </Screen>
    </section>
  );
}

export const pageQuery = graphql`
  query ArtistByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        name
        path
        website
        facebook
        twitter
        pressPhoto {
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
`;
