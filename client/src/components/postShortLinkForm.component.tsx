
import React from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import * as yup from 'yup'
import { Formik } from 'formik'

const schema = yup.object().shape({
  slug: yup.string(),
  web: yup.string().required(),
  android: yup.object().shape({
    primary: yup.string().url(),
    fallback: yup.string().url()
  }),
  ios: yup.object().shape({
    primary: yup.string().url(),
    fallback: yup.string().url()
  })

})

function CreateShortLinkForm () {
  return (
    <Container className='mt-4'>
    <Row className="justify-content-md-center">
    <Col md="auto" lg="6">
    <Formik
      validationSchema={schema}
      onSubmit={(values) => { alert(JSON.stringify(values)) }}
      initialValues={{
        slug: '',
        web: '',
        android: { primary: '', fallback: '' },
        ios: { primary: '', fallback: '' }
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationFormikSlug">
              <Form.Label>Slug</Form.Label>
              <Form.Control
                type="text"
                name="slug"
                placeholder="slug (optional)"
                value={values.slug}
                onChange={handleChange}
                isValid={touched.slug && !errors.slug}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationFormikWeb">
              <Form.Label>Web Url</Form.Label>
              <Form.Control
                type="url"
                name="web"
                placeholder="web url (required)"
                value={values.web}
                onChange={handleChange}
                isInvalid={!!errors.web}
                isValid={touched.web && !errors.web}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormikAndroidPrimary">
              <Form.Label>Android Primary Url</Form.Label>
              <Form.Control
                type="url"
                name="androidPrimary"
                placeholder="android primary url (optional)"
                value={values.android.primary}
                onChange={handleChange}
                isValid={touched.android?.primary && !errors.android?.primary}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormikAndroidFallback">
              <Form.Label>Android Fallback Url</Form.Label>
              <Form.Control
                type="url"
                name="androidFallback"
                placeholder="android fallback url (optional)"
                value={values.android?.fallback}
                onChange={handleChange}
                isValid={touched.android?.fallback && !errors.android?.fallback}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormikIosPrimary">
              <Form.Label>Ios Primary Url</Form.Label>
              <Form.Control
                type="url"
                name="iosPrimary"
                placeholder="ios primary url (optional)"
                value={values.ios.primary}
                onChange={handleChange}
                isValid={touched.ios?.primary && !errors.ios?.primary}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormikIosFallback">
              <Form.Label>Ios Fallback Url</Form.Label>
              <Form.Control
                type="url"
                name="iosFallback"
                placeholder="ios fallback url (optional)"
                value={values.ios?.fallback}
                onChange={handleChange}
                isValid={touched.ios?.fallback && !errors.ios?.fallback}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="submit">Create Short Link</Button>
        </Form>
      )}
    </Formik>
    </Col>
    </Row>
    </Container>
  )
}

export default CreateShortLinkForm
