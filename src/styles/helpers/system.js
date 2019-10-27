import { css } from 'styled-components'
import { breakpoints as bp } from '../variables/base/responsive'

import {
  color,
  border,
  flexbox,
  layout,
  shadow,
  space,
  typography
} from 'styled-system'

export const baseCSS = css(
  color,
  border,
  flexbox,
  layout,
  space,
  shadow,
  typography
)

// export const responsiveBase = props => css`
//   ${baseCSS}

//   ${props && props.tablet && css`

//   `}

// `

// const mediaCSS = breakpoint =>
//   breakpoint &&
//   `
//   @media (min-width: bp[${breakpoint}]) { ${baseCSS} }
// `

// prettier-ignore
export const responsiveBase = (({tablet, desktop, widescreen, fullhd}) => css`
  ${tablet && css`@media (max-width: 768px) { ${color} }`}
  ${desktop && css`@media (max-width: 1024px) { ${color} }`}
  ${widescreen && css`@media (max-width: bp.widescreen) { ${baseCSS} }`}
  ${fullhd && css`@media (max-width: bp.fullhd) { ${baseCSS} }`}
`)
