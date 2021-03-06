import styled from 'styled-components'

import { Container } from 'UI'
import { colors } from 'Styles'

export const HeaderBase = styled.header`
  grid-area: header;

  background-color: ${colors.offWhite};
  color: ${colors.dark};
  font-size: 16px;
  font-weight: 500;
  padding: 0;
  text-transform: uppercase;
`

export const HeaderInner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
