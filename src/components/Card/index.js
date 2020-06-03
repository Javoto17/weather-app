import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

function Card ({ children }) {
  return (
    <div className="Card-wrapper ">
      <div className="Card-content ">{children}</div>
    </div>
  )
}

Card.propTypes = {}

export default Card
