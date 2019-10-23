import styled, { css } from 'styled-components'
import styledMap from 'styled-map'

import { ErrorMessage } from 'formik'

import { baseCSS, colors, colorProps } from 'Styles'

// prettier-ignore
const HelpCSS = css`
  display: block;

  font-size: 0.875rem;
  margin-top: 0.25rem;
`

export const Help = styled.p`
  ${HelpCSS}
  ${baseCSS}
`

export const FormikHelp = styled(ErrorMessage)`
  ${HelpCSS}
  color: ${colors.error};
`
