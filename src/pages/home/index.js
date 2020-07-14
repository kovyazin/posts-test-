import React, { Fragment, useEffect } from 'react'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { ContentCenter } from '@ui'
import { PostsList, postsSelectors, postsActions } from '@features/posts'
import { useTitle } from '@lib/title'

export const HomePage = () => {
  const dispatch = useDispatch()
  const posts = useSelector(postsSelectors.posts)

  useTitle('Главная')

  useEffect(() => {
    dispatch(postsActions.getPosts())
  }, [dispatch])

  return (
    <Container>
      <ContentCenter fullHeight>
        {posts.length === 0 && (
          <Fragment>
            <h1>Вы еще не добавляли никаких записей</h1>
            <p>Нажмите на кнопку ниже, чтобы добавить вашу первую запись</p>
            <Link to="/add-post">
              <Button variant="outline-primary">Добавить запись</Button>
            </Link>
          </Fragment>
        )}
        {posts.length > 0 && (
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
