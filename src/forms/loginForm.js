import React from 'react'
import { navigate } from 'gatsby'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { firebase } from 'Classes'
import { Form, Button, Email, Help, Password } from 'UI'

export const LoginForm = () => {
  async function authenticateUser(values, setStatus, setSubmitting) {
    const { email, password } = values

    setSubmitting(true)

    try {
      await firebase.login(email, password)
      navigate('/news', { replace: true })
    } catch (error) {
      console.log('Authentication Error: ', error)
      setStatus({
        firebaseErrorMessage: error.message
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Formik
        render={props => <RenderForm {...props} />}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setStatus, setSubmitting, resetForm }) => {
          resetForm()
          await authenticateUser(values, setStatus, setSubmitting)
        }}
      />
    </>
  )
}

const RenderForm = ({ handleSubmit, isSubmitting, isValid, status }) => {
  console.log('status: ', status)
  return (
    <Form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <Email name='email' />
      <Password name='password' />
      {!!status && status.firebaseErrorMessage && (
        <Help color='error' mt='-0.75em'>
          {status.firebaseErrorMessage}
        </Help>
      )}
      <Button
        mt={5}
        fullWidth
        disabled={!isValid || isSubmitting}
        type='submit'
      >
        Submit
      </Button>
    </Form>
  )
}

const initialValues = {
  email: '',
  password: ''
}

// prettier-ignore
const validationSchema = Yup.object().shape({
  email: Yup
    .string('Enter your email')
    .required('Email is required')
    .email('Enter a valid email'),
  password: Yup
    .string('')
    .required('Enter your password')
})
