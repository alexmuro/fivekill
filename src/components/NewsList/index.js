import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import './newslist.css'

const dateOptions = {
	year: 'numeric', 
	month: 'long', 
	day: 'numeric' 
}


function NewsListing(props) {
	const news = props.news
	console.log('newsListing HERE', news)
	let image = news.frontmatter.coverImage
		? <Img sizes={news.frontmatter.coverImage.childImageSharp.sizes} />
	    : <span />

	return (
		<div className='article'>
		   	<Link to={news.frontmatter.path} className="news__link" >
	    		<div className='news_container'>
	    			<div className='news_image'>
	    				{image}
	    			</div>
	    			<div className='news_excerpt'>
		    			<div className='news__heading'>
		    				<span className='news__title'>{news.frontmatter.title}</span><br/>
		    				<span>{news.frontmatter.date}</span>
		    			</div>
		    			<p>
		    				{news.excerpt}
		    			</p>
	    			</div>
	    			
	    		</div>
			</Link>
		</div>
	)
}

export default function Index(props) {
  console.log('news listing props', props.news)
  //const { edges: releases } = data.allMarkdownRemark;
  let articles = props.news
    .filter(newsItem => {
    	console.log('filter', newsItem.node.frontmatter.title.length)
    	return newsItem.node.frontmatter.title.length > 0
    })
    .map(newsItem => {
    	console.log('')
    	return <NewsListing news={newsItem.node} />
    })
  
  console.log('albums', articles)
  return (
	  <section>
      	<h3 className='sectionHeader'>{props.title}</h3>
      	<div className='artileList'>
      		{ articles }
      	</div>
	  </section>
	)
}

