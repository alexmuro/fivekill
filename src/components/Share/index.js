import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className="share__wrapper">
    <a className="info" data-welcome-open>
      Info
    </a>
    <aside className="object__share" data-object-share>
      <h4>Share</h4>
      <div className="social-share">
        <ul>
          <li className="facebook">
            <a data-social="Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.fivekillrecords.com&title=FIVE%20KILL%20Records.">
              <span className="icon" />
              <span>Share on Facebook</span>
            </a>
          </li>
          <li className="twitter">
            <a data-social="Twitter" href="https://twitter.com/intent/tweet?text=Check%20out%20the%20latest%20releases%20by%20Five%20Kill%20Records&url=http%3A%2F%2Fwww.fivekillrecords.com%2F">
              <span className="icon" />
              <span>Share on Twitter</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
)

export default Header
