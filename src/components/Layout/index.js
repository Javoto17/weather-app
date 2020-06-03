import React from 'react'
import PropTypes from 'prop-types'

function MainLayout ({ children }) {
  return (
    <div className="theme-light">
      <header></header>
      <main className="container">{children}</main>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout
