import React from 'react'
import Link from 'gatsby-link'
import Screen from '../components/Screen'

const IndexPage = () => (
  <section className='content'>
      <Screen title={'About'} subtitle={' Five Kill Records'}>
        <div style={{textAlign: 'justify'}}>
	        <p>
	        Five Kill Records is an independent record label based out of New York’s Capital Region. 
	        Named after the confluence of five kills (rivers) where Albany was first settled as a Dutch colony—Rutten Kill, 
	        Vosen Kill, Beaver Kill, Normans Kill and Patroon Creek—the label itself is a confluence of five Albany/Troy-area professional 
	        and DIY recording collectives and labels: B3nson Recording Company, Swordpaw Collective, Collar City Records, The Rev Records,
	        and Bee Side Cassettes.
	        </p>
	        <p>
			Five Kill is a label run by musicians, artists, producers, engineers, promoters, house-show operators, editors, and videographers
			 The label’s aim is to support musicians and aid in developing their careers by providing ideas, support and access to music industry
			 services to enrich the region’s creative economy. Fivekill is a not for profit record label reinvesting
			 its income back into services for artists. 
			</p>
		
			<h3 className='sectionHeader'>Contact</h3>
			<p>
			<strong>Gerneral Inquiries:</strong> info@fivekillrecords.com<br />
			<strong>Press:</strong> press@fivekillrecords.com
			</p>
			<h3 className='sectionHeader'>Demo Submissions</h3>
			<p>
			Fivekill will accept demos in the form of links to track or album streams emailed to demos@fivekillrecords.com. Do NOT attach audio files,
			they will not get listened to.
			</p>
		</div>
      </Screen>
  </section>
)

export default IndexPage
