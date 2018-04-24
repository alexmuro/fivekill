import React from 'react'
import Link from 'gatsby-link'
import './screen.css'

const IndexPage = (props) => {

  const socials = props.socials ? Object.keys(props.socials).map(key => {
    return (
      <a className={"artist-social " + key} href={props.socials[key]} target="_blank">{key}</a>
    )
  }) : []
  return (
    <div >
      <div className="screen__inner">
        <Link to="/">
          <button type="button" className="screen__close" aria-label="close" data-screen-close />
        </Link>
        <div className="screen__title">
            <h3>{props.title} <small>{props.subtitle}</small></h3>
            <div className="artist-socials">
              {socials}
            </div>
        </div>
        <div className="screen__scrollarea ps-container ps-theme-buzz" data-ps-id="eabb1bef-cfb1-7960-b945-e0f73d35b728">
            <div className="screen__body">
              <div className="posts">
                {props.children}  
              </div>
            </div>
            <div className="ps-scrollbar-x-rail" style={{left: 0, bottom: 0}}>
              <div className="ps-scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} />
            </div>
            <div className="ps-scrollbar-y-rail" style={{top: 0, right: 0, height: 416}}>
              <div className="ps-scrollbar-y" tabIndex={0} style={{top: 0, height: 120}} />
            </div>
        </div>
      </div>
    </div>
  )
}
export default IndexPage
