import React from 'react'

import PropTypes from 'prop-types'
import Toast from 'react-bootstrap/Toast'

export const Notification = ({ isShow, hide, title, text, delay = 3000 }) => {
  return (
    <Toast
      style={{ position: 'fixed', top: 10, right: 10 }}
      onClose={hide}
      show={isShow}
      delay={delay}
      autohide
    >
      <Toast.Header>
        <strong className="mr-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body>{text}</Toast.Body>
    </Toast>
  )
}

Notification.propTypes = {
  delay: PropTypes.number,
  isShow: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
