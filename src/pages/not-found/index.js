import React from 'react'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import { ContentCenter } from '@ui'

export const NotFoundPage = () => {
  return (
    <Container>
      <ContentCenter fullHeight>
        <h1>404</h1>
        <p>Такой страницы не существует</p>
        <Link to="/">
          <Button variant="outline-primary">Вернуться на главную</Button>
        </Link>
      </ContentCenter>
    </Container>
  )
}
