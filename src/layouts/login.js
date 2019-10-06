import React from 'react'
import PropTypes from 'prop-types'

import { BaseLayout } from './base'
import { Grid } from 'UI'

export const LoginLayout = ({ children }) => {
  // const { title } = MetaData()

  return (
    <BaseLayout>
      <Grid minHeight="100vh" gridColumns="1fr 4fr">
        {children}
      </Grid>
    </BaseLayout>
  )
}

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
