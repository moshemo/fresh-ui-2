import React from 'react'

import styled, { css } from 'styled-components'
import { darken, readableColor as rc } from 'polished'
import { space } from 'styled-system'
import styledMap from 'styled-map'

import { baseCSS, buttons, colors, colorProps, radii, radiiProps } from 'Styles'
import { FontAwesomeIcon as FaIcon } from 'FontAwesome'

// const buttonSizes = styledMap(buttons.sizes)

const Icon = styled(FaIcon)`
  ${space}
`

export const ButtonBase = styled('button')(
  ({
    fullwidth,
    fullWidth,
    icon,
    inverted,
    outline,
    tablet,
    desktop,
    widescreen
  }) => css`
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

    font-size: ${styledMap(buttons.sizes)};
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
          height: ${styledMap(buttons.sizes)};
          width: ${styledMap(buttons.sizes)};
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

  ${tablet &&
    css`
      @media (max-width: 768px) {
        background-color: ${colors[tablet.style] || tablet.style};
        border: ${colors[tablet.style] || tablet.style};
        border-radius: ${radii[tablet.radius] || tablet.radius};
        color: ${tablet.style && rc(colors[tablet.style] || tablet.style)};
    `}

    ${baseCSS}
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
