import React from 'react'

import { LoginForm } from 'Forms'
import { LoginLayout } from 'Layouts'
import { NavBase, NavLink } from 'UI'

const LogInPage = () => {
  return (
    <LoginLayout>
      <LoginForm />
      <NavBase>
        <NavLink to="/forgot">Forgot password?</NavLink>
      </NavBase>
    </LoginLayout>
  )
}

export default LogInPage
