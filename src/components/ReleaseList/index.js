import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import SectionHeader from '..//Layout/SectionHeader'

import './releaseList.scss'
const dateOptions = {
	year: 'numeric', 
	month: 'long', 
	day: 'numeric' 
}


function Album(props) {
	const release = props.release
	let image = release.frontmatter.coverImage
		? <Img sizes={release.frontmatter.coverImage.childImageSharp.sizes} />
	    : <span />

	return (
		<div className='album' key={release.id}>
		   	<Link to={release.frontmatter.path} className="release__link" >
	    		<span >
	    			{image}
	    			<div className='release__details'> 
		    			<div className='release__title'>
		    			 {release.frontmatter.artist} - <span className='strong'>{release.frontmatter.title}</span> 
		    			 <span style={{float: 'right'}}> {release.frontmatter.releaseNumber}  </span>
		    			</div>
		    			<div className='release__artist'>
		    				
		    			</div>
		    			<div className="release__date strong">
		    				{release.frontmatter.date.toLocaleDateString('en-US', dateOptions)}
		    			</div>
		    		</div>
	    		</span>
			</Link>
		</div>
	)
}

export default function Index(props) {
  //const { edges: releases } = data.allMarkdownRemark;
  let albums = props.releases
    .filter(release => release.frontmatter.title.length > 0)
    .map((release,index) => <Album key={release.id} release={release} />)
  
  return (
	  <section style={{marginBottom: -30, paddingLeft: 10}}>
	  	<SectionHeader title={props.title} />
      	<div className='releaseList'>
      		{ albums }
      	</div>
	  </section>
	)
}

