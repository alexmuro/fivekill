import React from 'react'
// import Link from 'gatsby-link'
import Screen from '../components/Screen'
import SectionHeader from '../components/Layout/SectionHeader'

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
			Five Kill is a label run by musicians, artists, producers, engineers, promoters, house-show operators, editors, and videographers.
			 The label’s aim is to support musicians and aid in developing their careers by providing ideas, support and access to music industry
			 services to enrich the region’s creative economy. Fivekill is a not for profit record label reinvesting
			 its income back into services for artists. 
			</p>
			<SectionHeader title='DONATE' />
			<p>
			 Five Kill Records is a designated 501c3 Not For Profit Organization and accepts tax deductable donations to help maintain its operations
			 and important mission of forwarding the Arts by helping artists reach a wider audience and teaching musicians how to successfully promote their craft.
			 <center style={{padding: '20px'}}>
				<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_s-xclick" />
					<input type="hidden" name="hosted_button_id" value="XSRLYG7M7KL2U" />
					<input type="image" src="https://www.fivekillrecords.com/images/button_donate.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
					<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
				</form>
			</center>
			
			<SectionHeader title='CONTACT' />
			<p>
			<strong>Gerneral Inquiries:</strong> info@fivekillrecords.com<br />
			<strong>Press:</strong> press@fivekillrecords.com
			</p>
			<SectionHeader title='DEMO SUBMISSIONS' />
			<p>
			Five Kill will accept demos in the form of links to track or album streams emailed to <strong>demos@fivekillrecords.com</strong>. Do NOT attach audio files,
			they will not get listened to.
			</p>
			

			</p>
		</div>
      </Screen>
  </section>
)

export default IndexPage
