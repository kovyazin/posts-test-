import React from 'react'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Formik } from 'formik'
import * as yup from 'yup'

import { ContentCenter } from '@ui'
import { useTitle } from '@lib/title'

const schema = yup.object({
  title: yup.string().required('Пожалуйста, введите заголовок записи'),
  content: yup.string().required('Пожалуйста, добавьте контент записи'),
  author: yup.string().required('Пожалуйста, введите имя автора записи')
})

export const AddPostPage = () => {
  useTitle('Добавить запись')

  return (
    <Container>
      <ContentCenter className="vh-100">
        <Formik
          validationSchema={schema}
          initialValues={{
            title: '',
            content: '',
            author: ''
          }}
          onSubmit={console.log}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form onSubmit={handleSubmit} className="w-100" noValidate>
              <Form.Group>
                <Form.Label srOnly>Заголовок записи</Form.Label>
                <Form.Control
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  isInvalid={!!errors.title}
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
                  isInvalid={!!errors.content}
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
                  values={values.author}
                  onChange={handleChange}
                  isInvalid={!!errors.author}
                  placeholder="Введите имя автора"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.author}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button type="submit" variant="outline-primary">
                  Добавить запись
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </ContentCenter>
    </Container>
  )
}
