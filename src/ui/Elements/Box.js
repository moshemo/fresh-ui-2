import styled from "styled-components"
import { baseCSS, box } from "Styles"

export const Box = styled.div`
  display: block;
  min-width: 0;

  background-color: ${box.backgroundColor};
  border-radius: ${box.borderRadius};
  box-shadow: ${box.boxShadow};
  color: ${box.color};
  padding: ${box.padding};

  ${baseCSS}
`
