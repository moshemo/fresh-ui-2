import { css } from "styled-components"

// import { colors, fonts } from "Styles"
import { colors } from "../variables/base/colors"
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacing
} from "../variables/base/typography"

export const Generic = css`
  * {
    background-repeat: no-repeat;
    box-sizing: inherit;
    margin: 0;
    padding: 0;

    :before,
    :after {
      box-sizing: inherit;
    }
  }

  html {
    background-color: ${colors.offWhite};
    box-sizing: border-box;
    font-size: ${fontSizes.html};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
  }

  article,
  aside,
  figure,
  footer,
  header,
  hgroup,
  section {
    display: block;
  }

  body,
  button,
  input,
  select,
  textarea {
    font-size: ${fontSizes.base};
  }

  code,
  pre {
    -moz-osx-font-smoothing: auto;
    -webkit-font-smoothing: auto;
    font-family: ${fonts.code};
  }

  body {
    color: ${colors.black};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    font-family: ${fonts.body};
  }

  a {
    color: ${colors.link};
    cursor: pointer;
    text-decoration: none;
  }

  a strong {
    color: currentColor;
  }

  a:hover {
    color: ${colors.hoverLink};
  }

  code {
    background-color: ${colors.light};
    color: ${colors.code};
    font-size: ${fontSizes.small};
    font-weight: 400;
    padding: 0.25em 0.5em;
  }

  hr {
    background-color: ${colors.light};
    border: none;
    display: block;
    height: 2px;
    margin: 0;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  input[type="checkbox"],
  input[type="radio"] {
    vertical-align: baseline;
  }

  small {
    font-size: ${fontSizes.small};
  }

  span {
    font-style: inherit;
    font-weight: inherit;
  }

  strong {
    color: ${colors.black};
    font-weight: 700;
  }

  fieldset {
    border: none;
  }

  pre {
    -webkit-overflow-scrolling: touch;
    background-color: ${colors.light};
    color: ${colors.dark};
    font-size: 0.875em;
    overflow-x: auto;
    padding: 1.25rem 1.5rem;
    white-space: pre;
    word-wrap: normal;
  }

  pre code {
    background-color: transparent;
    color: currentColor;
    font-size: 1em;
    padding: 0;
  }

  table td,
  table th {
    text-align: left;
    vertical-align: top;
  }

  table th {
    color: ${colors.black};
  }

  h1 {
    font-size: ${fontSizes.h1};
    font-weight: ${fontWeights.h1};
    line-height: 1;
    letter-spacing: ${letterSpacing.h1};
    font-family: ${fonts.body};
  }

  h2 {
    font-size: ${fontSizes.h2};
    font-weight: ${fontWeights.h2};
    line-height: 1.35;
    letter-spacing: ${letterSpacing.h2};
    font-family: ${fonts.body};
  }

  h3 {
    font-size: ${fontSizes.h3};
    font-weight: ${fontWeights.h3};
    line-height: 48px;
    letter-spacing: ${letterSpacing.h3};
    font-family: ${fonts.body};
  }

  h4 {
    font-size: ${fontSizes.h4};
    font-weight: ${fontWeights.h4};
    line-height: 40px;
    letter-spacing: ${letterSpacing.h4};
    font-family: ${fonts.body};
  }

  h5 {
    font-size: ${fontSizes.h5};
    font-weight: ${fontWeights.h5};
    line-height: 32px;
    letter-spacing: ${letterSpacing.h5};
    font-family: ${fonts.body};
  }

  h6 {
    font-size: ${fontSizes.h6};
    font-weight: ${fontWeights.h6};
    line-height: 1;
    letter-spacing: ${letterSpacing.h6};
    font-family: ${fonts.body};
  }
`
