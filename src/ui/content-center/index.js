import React from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'

export const ContentCenter = ({ children, className }) => (
  <div
    className={classNames(
      'd-flex flex-column align-items-center justify-content-center',
      className
    )}
  >
    {children}
  </div>
)

ContentCenter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}
