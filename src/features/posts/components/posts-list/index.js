import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup'

export const PostsList = ({ posts }) => {
  return (
    <ListGroup className="w-100">
      {posts.map(({ title, date, author, id }) => (
        <ListGroup.Item
          key={id}
          className="d-flex align-items-baseline"
          as="button"
          action
        >
          <span className="font-weight-bold mr-1">{title}</span>
          <small className="text-muted font-italic">{date}</small>
          <span className="ml-auto">Автор: {author}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
