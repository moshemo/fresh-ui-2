import styled, { css } from 'styled-components'
import { color, grid, layout } from 'styled-system'

export const Grid = styled.div(
  ({ autoFit, center }) => css`
  display: grid;
  ${autoFit &&
    `grid-template-columns: repeat(auto-fit, minmax(${autoFit}, 1fr));`}
  ${center && 'justify-items: center; align-content: center;'}
  ${color}
  ${grid}
  ${layout}
`
)
