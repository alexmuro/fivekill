import React from 'react'
import Link from 'gatsby-link'
import './sidebar.scss'

const Header = () => (
  <div>
    <section className="options">
       <div className="section__inner">
          <label htmlFor="option-radio-12h">
            <span><small>BANDS</small></span>
            <input id="option-radio-12h"
             name="option-radio"
             type="radio"
             selected
             data-option
             data-option-period="12h" />
          </label>
          <label htmlFor="option-radio-1d">
            <span><small>RECS</small></span>
            <input id="option-radio-1d"
             name="option-radio"
             type="radio"
             data-option
             data-option-period="1d" />
          </label>
          <label htmlFor="option-radio-1d">
            <span><small>NEWS</small></span>
            <input id="option-radio-1d"
             name="option-radio"
             type="radio"
             data-option
             data-option-period="1d" />
          </label>
          <label htmlFor="option-radio-1d">
            <span><small>ABT</small></span>
            <input id="option-radio-1d"
             name="option-radio"
             type="radio"
             data-option
             data-option-period="1d" />
          </label>
          <div className="handle"></div>
       </div>
    </section>
    <section className='main-nav'>
      <div className="section__inner">
        <section className="side-nav">
           <div className="section__inner">
              <div className="logo">
                 <h1>Fivekill Records</h1>
              </div>
              <ul className="side-nav">
                <li className="separator top">
                  <div className="separator__inner">
                  <span/><span>*</span><span>★</span>
                    <span>Five Kill Records</span>
                  <span>★</span><span>*</span></div>
                </li>
                <li>
                  <Link className='nav-link' to='/artists'>
                    <div className="row">
                      <div className="chart-name">ARTISTS</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className='nav-link' to='/releases'>
                    <div className="row">
                      <div className="chart-name">RELEASES</div>
                    </div>
                  </Link>
                </li>
                 <li>
                  <Link className='nav-link' to='/news'>
                    <div className="row">
                      <div className="chart-name">NEWS</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className='nav-link' to='/about'>
                    <div className="row">
                      <div className="chart-name">ABOUT</div>
                    </div>
                  </Link>
                </li>
               

              </ul>
           </div>
        </section>
        
     </div>
    </section>
  </div>
)

export default Header
