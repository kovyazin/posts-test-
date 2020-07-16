import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

import { postsActions, postsSelectors } from '@features/posts'
import { ContentCenter, Notification } from '@ui'
import { useTitle } from '@lib/title'

export const AddPostPage = () => {
  const dispatch = useDispatch()
  const titles = useSelector(postsSelectors.titles)

  const [isShowNotification, setIsShowNotification] = useState(false)

  useTitle('Добавить запись')

  const handleAddPostSubmit = (values, { resetForm }) => {
    dispatch(postsActions.addPost(values))
    resetForm({})
    setIsShowNotification(true)
  }

  return (
    <Container>
      <ContentCenter fullHeight>
        <Formik
          validationSchema={yup.object({
            title: yup
              .mixed()
              .required('Пожалуйста, введите заголовок записи')
              .notOneOf(titles, 'Запись с таким заголовком уже существует'),
            content: yup
              .string()
              .required('Пожалуйста, добавьте контент записи'),
            author: yup
              .string()
              .required('Пожалуйста, введите имя автора записи')
          })}
          initialValues={{
            title: '',
            content: '',
            author: ''
          }}
          onSubmit={handleAddPostSubmit}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => {
            return (
              <Form onSubmit={handleSubmit} className="w-100" noValidate>
                <Form.Group>
                  <Form.Label srOnly>Заголовок записи</Form.Label>
                  <Form.Control
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    isInvalid={touched.title && !!errors.title}
                    placeholder="Введите заголовок записи"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.title}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label srOnly>Контент записи</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="content"
                    value={values.content}
                    onChange={handleChange}
                    isInvalid={touched.content && !!errors.content}
                    rows={8}
                    placeholder="Добавьте контент записи"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.content}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label srOnly>Имя автора</Form.Label>
                  <Form.Control
                    name="author"
                    value={values.author}
                    onChange={handleChange}
                    isInvalid={touched.author && !!errors.author}
                    placeholder="Введите имя автора"
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.author}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-flex flex-column flex-sm-row justify-content-sm-between">
                  <Link
                    to="/"
                    className="mt-2 order-1 text-decoration-none order-sm-0 mt-sm-0"
                  >
                    <Button variant="outline-primary" block>
                      Вернуться на главную
                    </Button>
                  </Link>
                  <Button type="submit" variant="primary">
                    Добавить запись
                  </Button>
                </div>
              </Form>
            )
          }}
        </Formik>
      </ContentCenter>
      <Notification
        title="Поздравляем"
        text="Запись была успешно добавлена"
        isShow={isShowNotification}
        hide={() => setIsShowNotification(false)}
      />
    </Container>
  )
}
