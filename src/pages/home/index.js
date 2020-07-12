import React, { Fragment } from 'react'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import { ContentCenter } from '@ui'
import { PostsList } from '@features/posts'
import { useTitle } from '@lib/title'

const posts = [
  {
    title: 'Title 1',
    date: '12 апреля',
    author: 'Иван',
    id: 1
  },
  {
    title: 'Title 2',
    date: '2 июня',
    author: 'Алексей',
    id: 2
  }
]

export const HomePage = () => {
  useTitle('Главная')

  return (
    <Container>
      <ContentCenter className="vh-100">
        {!posts.length && (
          <Fragment>
            <h1>Вы еще не добавляли никаких записей</h1>
            <p>Нажмите на кнопку ниже, чтобы добавить вашу первую запись</p>
            <Link to="/add-post">
              <Button variant="outline-primary">Добавить запись</Button>
            </Link>
          </Fragment>
        )}
        {posts.length && (
          <Fragment>
            <div className="w-100 d-flex flex-row-reverse mb-3">
              <Link to="/add-post">
                <Button variant="outline-primary">Добавить запись</Button>
              </Link>
            </div>
            <PostsList posts={posts} />
          </Fragment>
        )}
      </ContentCenter>
    </Container>
  )
}
