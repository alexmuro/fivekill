import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import SectionHeader from '..//Layout/SectionHeader'

import './releaseList.scss'
// const dateOptions = {
// 	year: 'numeric', 
// 	month: 'long', 
// 	day: 'numeric' 
// }


function Album(props) {
	const release = props.release
	let image = release.frontmatter.coverImage
		? <Img sizes={release.frontmatter.coverImage.childImageSharp.sizes} />
	    : <span />

	return (
		<div className='album' key={release.id}>
		   	<Link to={release.frontmatter.path} className="release__link" >
	    		<span >
	    			<div style={{boxShadow: '0px 2px 6px 0px hsla(0, 0%,0%,0.2)', border: '5px solid #fefefe'}}>
	    			{image}
	    			</div>
	    			<div className='release__details'> 
		    			<div className='release__title'>
		    			  <span className='strong'>{release.frontmatter.title}</span> 
		    			</div>
		    			<div className='release__artist'>
		    				{release.frontmatter.artist}	
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
      	<div className={props.vertical ? 'releaseListVertical' : 'releaseList'}>
      		{ albums }
      	</div>
	  </section>
	)
}

