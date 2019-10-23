import { material } from "./material-colors"
import { darken, lighten, readableColor } from "polished"
// import { colors, colorPropsObj } from '../variables/colors';
import { colors, colorPropsObj } from "../index"

// Color Functions
export const rc = color => readableColor(color, colors.dark, colors.light)

export const darkenColorProps = amount => {
  let colorPropsDark = {}

  for (let colorProp in colorPropsObj) {
    colorPropsDark[colorProp] = darken(amount, colorPropsObj[colorProp])
  }

  return colorPropsDark
}

export const lightenColorProps = amount => {
  let colorPropsLight = {}

  for (let colorProp in colorPropsObj) {
    colorPropsLight[colorProp] = lighten(amount, colorPropsObj[colorProp])
  }

  return colorPropsLight
}
