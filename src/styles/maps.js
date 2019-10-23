import styledMap from "styled-map"

import { colors } from "./variables/base/colors"
import { radii } from "./variables/base/borders"

// colors
const colorPropsObj = {
  ...colors,
  default: colors.primary
}

export const colorProps = styledMap(colorPropsObj)

// radii
const radiiPropsObj = {
  ...radii,
  default: radii.curve
}

export const radiiProps = styledMap(radiiPropsObj)
