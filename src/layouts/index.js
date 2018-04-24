import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Sidebar from '../components/Sidebar'
import './index.scss'


const TemplateWrapper = ({ children }) => (
  <div >
    <Helmet
      title="Five Kill Records"
      meta={[
        { name: 'description', content: 'A not-for-profit independent record label from New York\'s capital region.' },
        { name: 'keywords', content: 'records, five kill, fivekill, bear grass, b3nson, swordpaw, collar city, bee side cassettes, rev records, independent, the parlor, rechorduroys' },
      ]}
    />
    <Sidebar />
    {children()}
    <div className="border border__top"></div>
    <div className="border border__left"></div>
    <div className="border border__right"></div>
    <div className="border border__bottom"></div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
