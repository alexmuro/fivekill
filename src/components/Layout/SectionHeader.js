import React from 'react'

const SectionHeader = (props) => {
  	return (
	  	<div className='sectionHead'>
	  		<div className='sectionTitle'>
	  			<h3>{props.title}</h3>
	  		</div>
	  		<div className='sectionRule' />
	  	</div>
	 )
};

export default SectionHeader