import React from 'react'

import { LoginForm } from 'Forms'
import { AuthLayout } from 'Layouts'
import { NavBase, NavLink } from 'UI'

const LogInPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
      <NavBase>
        <NavLink to='/forgot'>Forgot password?</NavLink>
      </NavBase>
    </AuthLayout>
  )
}

export default LogInPage
