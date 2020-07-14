import React from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import './styles.css'

export const ContentCenter = ({ children, fullHeight = false }) => (
  <div
    className={classNames(
      'd-flex flex-column align-items-center justify-content-center',
      { 'full-height': fullHeight }
    )}
  >
    {children}
  </div>
)

ContentCenter.propTypes = {
  children: PropTypes.node.isRequired,
  fullHeight: PropTypes.bool
}
