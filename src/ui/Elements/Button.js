import React from 'react'
import styled, { css } from 'styled-components'
import { darken, readableColor as rc } from 'polished'
import { shadow, space } from 'styled-system'
import styledMap from 'styled-map'
// import styledMap, { mapToTheme as theme } from 'styled-map';

// import { buttons } from '../../styles/variables/buttons';
import { baseCSS, colors, colorProps, radiiProps } from 'Styles'
// import { colors } from "../../styles/variables/colors"
// import { baseCSS } from "../../styles/helpers/system"
// import { colorProps, radiiProps } from "../../styles/maps"
import { FontAwesomeIcon as FaIcon } from 'FontAwesome'

const buttonSizes = styledMap`
    small: 0.75rem;
    default: 1rem;
    medium: 1.75rem;
    large: 2.5rem;
`

const Icon = styled(FaIcon)`
  ${space}
`

export const ButtonBase = styled('button')(
  ({ fullwidth, fullWidth, icon, inverted, outline, rounded }) => css`
    appearance: none;

    background-color: ${colorProps};
    border: 1px solid ${colorProps};
    border-radius: ${radiiProps};
    box-shadow: none;
    outline: 0;

    color: ${props => rc(colorProps(props))};
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;

    font-size: ${buttonSizes};
    font-weight: 600;
    letter-spacing: 0.03em;
    line-height: 1em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;

    margin: 0;
    ${'' /* min-width: 5.5em;
    min-height: 1em; */}
    padding: 0.8em 1.5em;

    transition: all 0.2s ease-in-out;
    vertical-align: baseline;
    user-select: none;

    &:hover {
      background-color: ${props => darken(0.1, colorProps(props))};
      border-color: ${props => darken(0.1, colorProps(props))};
      color: ${props => props.colorHover || rc(darken(0.1, colorProps(props)))};
    }

    :disabled, 
    [disabled] {
      cursor: not-allowed;
      opacity: 0.5;
      :hover {
        background-color: ${colorProps};
        border-color: ${colorProps};
      }
    }
      
    ${(fullwidth || fullWidth) && `width: 100%;`}

    ${icon &&
      css`
        padding-right: 0.75em;
        padding-left: 0.75em;

        svg {
          height: ${buttonSizes};
          width: ${buttonSizes};
        }
      `}



    

    ${outline &&
      css`
        background-color: transparent;
        color: ${colorProps};
      `}

    ${inverted &&
      css`
        background-color: ${colors.white};
        color: ${colorProps};
      `}
  
    ${inverted &&
      outline &&
      css`
        background-color: transparent;
        border-color: #fff;
        color: #fff;
        :hover {
          background-color: #fff;
          color: ${colorProps};
        }
      `}



    ${baseCSS}
    ${shadow}
  `
)

export const Button = props => {
  const { children, icon, iconLeft, iconRight } = props

  return (
    <ButtonBase {...props}>
      {iconLeft && <Icon icon={iconLeft} mr='0.75em' />}
      {!icon && children}
      {icon && <Icon icon={icon} />}
      {iconRight && <Icon icon={iconRight} ml='0.75em' />}
    </ButtonBase>
  )
}
