import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Sidebar from '../components/Sidebar'
import './index.css'


const TemplateWrapper = ({ children }) => (
  <div >
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
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
