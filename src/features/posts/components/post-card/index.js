import React from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import Card from 'react-bootstrap/Card'

import { dayjs } from '@lib/dayjs'

import './styles.css'

export const PostCard = ({ title, content, author, timestamp, className }) => {
  return (
    <Card className={classNames('post-card', className)}>
      <Card.Header className="font-weight-bold text-center">
        {title}
      </Card.Header>
      <Card.Body>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center justify-content-between">
        <span>{dayjs().to(dayjs(timestamp))}</span>
        <span>Автор: {author}</span>
      </Card.Footer>
    </Card>
  )
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  className: PropTypes.string
}
