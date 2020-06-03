import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

function WrapperChart ({ children, title, onClickUpdate }) {
  return (
    <>
      <div className="chart-header">
        <div className="chart-button"></div>
        <h3 className="chart-title">{title}</h3>
        <div className="chart-button">
          <button className="button" onClick={() => onClickUpdate()}>
            <FontAwesomeIcon icon={faSyncAlt} />
          </button>
        </div>
      </div>
      {children}
    </>
  )
}

WrapperChart.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  onClickUpdate: PropTypes.func
}

export default WrapperChart
