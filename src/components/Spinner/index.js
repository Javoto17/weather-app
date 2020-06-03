import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Spinner () {
  return (
    <div className="wrapper-spinner">
      <FontAwesomeIcon icon={faSpinner} className="spinner" />
    </div>
  )
}

export default Spinner
