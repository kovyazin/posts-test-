import React, { Fragment, useEffect } from 'react'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { PostCard, postsSelectors, postsActions } from '@features/posts'
import { useTitle } from '@lib/title'
import { ContentCenter } from '@ui'

export const PostPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const post = useSelector(postsSelectors.currentPost(Number(id)))

  useTitle(post?.title)

  useEffect(() => {
    dispatch(postsActions.getPosts())
  }, [dispatch])

  return (
    <Container>
      <ContentCenter fullHeight>
        {post && (
          <Fragment>
            <PostCard
              title={post.title}
              timestamp={post.timestamp}
              content={post.content}
              author={post.author}
              className="mb-4"
            />

            <Link to="/">
              <Button variant="outline-primary">Вернуться на главную</Button>
            </Link>
          </Fragment>
        )}
        {!post && (
          <Fragment>
            <h1 className="mb-3 text-center">Упс. Такой записи не существует</h1>
            <Link to="/">
              <Button variant="outline-primary">Вернуться на главную</Button>
            </Link>
          </Fragment>
        )}
      </ContentCenter>
    </Container>
  )
}
