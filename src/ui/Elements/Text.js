import styled, { css } from "styled-components"
import { color, space, system, typography } from "styled-system"

import { colors } from "Styles"

const textStyles = system({
  columns: { property: "columns" },
  columnCount: { property: "columnCount" },
  columnGap: { property: "columnGap" },
  columnWidth: { property: "columnWidth" },
  textTransform: true,
  textDecoration: true,
  verticalAlign: true,
  whiteSpace: true
})

const textStyles__OLD = ({
  capitalize,
  columns,
  columnCount,
  columnGap,
  columnWidth,
  lowercase,
  uppercase,
  truncate
}) => css`

  ${columns &&
    `
      column-count: 2;
      column-gap: 32px;
      column-width: 340px;
    `}

  ${columnCount && `column-count: ${columnCount};`}
  ${columnGap && `column-gap: ${columnGap};`}
  ${columnWidth && `column-width: ${columnWidth};`}


  ${uppercase && `text-transform: uppercase;`}
  ${lowercase && `text-transform: lowercase;`}
  ${capitalize && `text-transform: capitalize;`}

  ${truncate &&
    ` 
      white-space: nowrap; 
      overflow: hidden;
      text-overflow: ellipsis;`}

  ${color}
  ${space}
  ${typography}
`

export const Text = styled.div`
  color: ${colors.dark};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.3em;

  ${textStyles}
`
