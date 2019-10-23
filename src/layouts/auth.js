import React from "react"
import PropTypes from "prop-types"

import { BaseLayout } from "./base"
import { Box, Grid } from "UI"
import { colors } from "Styles"

export const AuthLayout = ({ children }) => {
  // const { title } = MetaData()

  return (
    <BaseLayout>
      <Grid center bg={colors.tertiaryLighter} minHeight="100vh">
        <Box style={{ padding: "30px" }}>{children}</Box>
      </Grid>
    </BaseLayout>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
}
