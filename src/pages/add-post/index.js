import React from 'react'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

import { postsActions, postsSelectors } from '@features/posts'
import { ContentCenter } from '@ui'
import { useTitle } from '@lib/title'

// const schema = yup.object({
//   title: yup.mixed().required('Пожалуйста, введите заголовок записи').isNotOnOf(),
//   content: yup.string().required('Пожалуйста, добавьте контент записи'),
//   author: yup.string().required('Пожалуйста, введите имя автора записи')
// })

export const AddPostPage = () => {
  const dispatch = useDispatch()
  const titles = useSelector(postsSelectors.titles)

  useTitle('Добавить запись')

  const handleAddPostSubmit = (values, { resetForm }) => {
    dispatch(postsActions.addPost(values))
    resetForm({})
  }

  return (
    <Container>
      <ContentCenter className="vh-100">
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
            console.log(values)
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

                <div className="d-flex justify-content-between">
                  <Link to="/">
                    <Button variant="outline-primary">
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
    </Container>
  )
}
