import React from 'react'
// import Link from 'gatsby-link'
import Helmet from "react-helmet"
// import Screen from '../components/Screen'
import ReleaseList from '../components/ReleaseList'
import NewsList from '../components/NewsList'
// import SectionHeader from '../components/Layout/SectionHeader'
import Share from '../components/Share'

import { StaticQuery, graphql } from "gatsby"

// const NOW = new Date()
export default function  IndexPage () {
	return (
		<StaticQuery
	 		query={graphql`
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
			`}
			
			render={data => {
				const { edges: releases } = data.releases;
				const { edges: news } = data.news;
				let futureReleases = releases
					.map(makeDate)
					.filter((d,i) => i < 6)

					console.log('news', news)
					let filternews = news.filter((d,i) => i < 6);
				// 	.filter(release => {
				// 		return release.frontmatter.date > NOW
				// 	})
				// 	.reverse()
				
				// let recentReleases = releases
				// 	.map(makeDate)
				// 	.filter(release => {
				// 		return release.frontmatter.date < NOW
				// 	})



				return (

				  <section className='content sectionContainer'>
				  	<Helmet title={`Home - Fivekill`} />
				  	
			  		<ReleaseList 
				  		title='LATEST RELEASES'
				  		releases={futureReleases}
				  	/>
				  	
				  	<NewsList
				  		title='NEWS'
				  		news={filternews}
				  	/>

				  	
				  </section>
				)
			}}
		/>
	)
}
 	
	


const makeDate =release => {
	release.node.frontmatter.date = new Date(release.node.frontmatter.date)
	return release.node
}
