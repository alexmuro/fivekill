import React from 'react'
import Link from 'gatsby-link'
import Screen from '../components/Screen'
import ReleaseList from '../components/ReleaseList'

const NOW = new Date()
const IndexPage = ({data}) => {
	console.log('index data', data)
	const { edges: releases } = data.releases;
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
	  	<ReleaseList 
	  		title='UPCOMING RELEASES'
	  		releases={futureReleases}
	  	/>
	  	<ReleaseList 
	  		title='LATEST RELEASES'
	  		releases={recentReleases}
	  	/>
	    <h1 className='nav-link' style={{paddingTop: '25%', color: '#761ed6'}}>
	      COMING SOON...
	    </h1>
	  </section>
	)
}
export default IndexPage

export const pageQuery = graphql`
  query NewReleases {
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
          excerpt
        }
      }
    }
  }
`;

const makeDate =release => {
	release.node.frontmatter.date = new Date(release.node.frontmatter.date)
	return release.node
}
