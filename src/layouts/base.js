import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

// import { FirebaseProvider } from 'Context'
import { FormProvider } from "Context"
// import GlobalCss from "Global"
import { GlobalCss, theme } from "Styles"

import { iconLibrary } from "Styles"

export const BaseLayout = ({ children }) => {
  // const { firebase } = useContext(FirebaseContext)
  return (
    <>
      <ThemeProvider theme={theme}>
        <FormProvider>
          {/* <FirebaseProvider> */}
          <>{children}</>
          {/* </FirebaseProvider> */}
        </FormProvider>
      </ThemeProvider>
      <GlobalCss />
    </>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired
}
