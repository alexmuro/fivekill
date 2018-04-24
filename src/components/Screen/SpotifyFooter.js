import React from 'react'
import './screen.css'

const SpotifyFooter = (props) => {
	return (
		<div className="screen__footer" style={{display: 'block'}}>
			<div className="play-button">
			    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve" className="s0">
			      <circle className="center" strokeWidth={5} strokeMiterlimit={10} cx={50} cy={50} r={30} />
			      <circle className="inner" strokeWidth={5} strokeMiterlimit={10} cx={50} cy={50} r={35} />
			      <circle className="outer" strokeWidth={5} strokeMiterlimit={10} cx={50} cy={50} r={40} />
			    </svg>
		        <div className="play" />
		    </div>
			<img className="track-cover processed" src="data:image/png;base64,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" />
			<span className="track-artist">Carmouflage Rose</span>
			<span className="track-title">Late Nights</span>
			<a className="track-link" target="_blank" href="https://open.spotify.com/track/6uiw7Bp5hPmiRLLE6etcKH">Listen on Spotify</a>
		</div>
	)
}

export default SpotifyFooter