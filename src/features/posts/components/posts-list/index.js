import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import { useHistory } from 'react-router-dom'

import { dayjs } from '@lib/dayjs'

export const PostsList = ({ posts }) => {
  const history = useHistory()

  return (
    <ListGroup className="w-100">
      {posts.map(({ title, timestamp, author, id }) => (
        <ListGroup.Item
          key={id}
          className="d-flex align-items-baseline"
          as="button"
          onClick={() => history.push(`/post/${id}`)}
          action
        >
          <span className="font-weight-bold mr-1">{title}</span>
          <small className="text-muted font-italic">
            {dayjs().to(dayjs(timestamp))}
          </small>
          <span className="ml-auto">Автор: {author}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
