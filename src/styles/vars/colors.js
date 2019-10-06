import { material } from '../helpers/material-colors'
import { accentArray, colorObject } from '../helpers/functions'

const grey = colorObject('grey', 'm600')
const primary = colorObject('green', 'm300')
const secondary = colorObject('purple', 'm600')
const tertiary = colorObject('yellow', 'm300')

const accent = accentArray('orange')
// const accent = Object.values(material.orange.accent)

export const colors = {
  grey,
  primary,
  secondary,
  tertiary,
  accent,

  white: material.shades.white,
  offWhite: material.grey.m50,
  light: material.grey.m100,

  dark: material.grey.m800,
  black: material.grey.m900,

  info: material.blue.m400,
  error: material.red.m400,
  success: material.green.m400,
  warning: material.yellow.m400,

  code: material.red.m500,

  on: {
    primary: material.grey.m50,
    secondary: material.grey.m900,
    background: material.grey.m900,
    surface: material.grey.m900,
    error: material.grey.m50,
  },

  link: {
    base: material.blue.m500,
    visited: material.purple.m600,
    hover: material.grey.m800,
    focus: material.grey.m800,
    active: material.grey.m800,
  },
}
