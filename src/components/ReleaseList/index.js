import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './releaseList.css'
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
		<div className='album'>
		   	<Link to={release.frontmatter.path} className="release__link" >
	    		<span>
	    			{image}
	    			<div className='release__title'>
	    				{release.frontmatter.releaseNumber} - <span className='strong'>{release.frontmatter.title}</span>
	    			</div>
	    			<div className='release__artist'>
	    				{release.frontmatter.artist}
	    			</div>
	    			<div className="release__date strong">
	    				{release.frontmatter.date.toLocaleDateString('en-US', dateOptions)}
	    			</div>
	    		</span>
			</Link>
		</div>
	)
}

export default function Index(props) {
  console.log('props', props)
  //const { edges: releases } = data.allMarkdownRemark;
  let albums = props.releases
    .filter(release => release.frontmatter.title.length > 0)
    .map(release => <Album release={release} />)
  
  console.log('albums', albums)
  return (
	  <section>
      	<h3 className='sectionHeader'>{props.title}</h3>
      	<div className='releaseList'>
      		{ albums }
      	</div>
	  </section>
	)
}

