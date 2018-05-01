import React from 'react'
import Link from 'gatsby-link'
import Helmet from "react-helmet"
import Screen from '../components/Screen'
import ReleaseList from '../components/ReleaseList'
import NewsList from '../components/NewsList'
import SectionHeader from '../components/Layout/SectionHeader'
import Share from '../components/Share'


const NOW = new Date()
const IndexPage = ({data}) => {
	const { edges: releases } = data.releases;
	const { edges: news } = data.news;
	let futureReleases = releases
		.map(makeDate)
		.filter(release => {
			return release.frontmatter.date > NOW
		})
		.reverse()
	
	let recentReleases = releases
		.map(makeDate)
		.filter(release => {
			return release.frontmatter.date < NOW
		})

	return (
	  <section className='content'>
	  	<Helmet title={`Home - Fivekill`} />
	  	<Share />
	  	<div className='releaseConainer'>
	  		<div>
		  		<ReleaseList 
			  		title='LATEST RELEASES'
			  		releases={recentReleases}
			  	/>
			  	<ReleaseList
			  		title='UPCOMING'
			  		releases={futureReleases}
			  	/>
			</div>
		  	<div>
		  		<SectionHeader title='Playlist' />
	  			<div style={{height: 380, padding: 10}}>
			  		<iframe src="https://open.spotify.com/embed/user/fivekillrecords/playlist/0weCSrZwioSyPGKXvgySm1%3Fsi%3Dtcq8Fx5hSIOg1Xfq2wOEtw" width={300} height={380} frameBorder={0} allowTransparency="true" allow="encrypted-media" style={{height: 380, width: 300}} />
			  		
			  	</div>
			</div>

	  	</div>
	  	<NewsList
	  		title='NEWS'
	  		news={news}
	  	/>

	  	
	  </section>
	)
}
export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    releases: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/releases/"} },
      sort: {fields: [frontmatter___date], order: DESC},
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
            path
            artist
            releaseNumber
            coverImage {
	          	childImageSharp {
	            	resize(width: 300, height: 300) {
	              	src
	            	}
	            	sizes(maxWidth: 786) {
	              	...GatsbyImageSharpSizes
	            	}
	          	}
	        }
          }
          id
          excerpt
        }
      }
    }
    news: allMarkdownRemark(
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

const makeDate =release => {
	release.node.frontmatter.date = new Date(release.node.frontmatter.date)
	return release.node
}
