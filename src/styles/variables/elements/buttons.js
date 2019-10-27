import { em } from 'polished'

import { colors } from '../base/colors'
import { fontSizes } from '../base/typography'
import { radii } from '../base/borders'
import { shadows } from '../base/shadows'

const { primary } = colors

export const buttons = {
  base: {
    default: {
      border: `1px solid ${primary}`,
      borderRadius: radii.none,
      boxShadow: shadows.none,
      fontWeight: 600,
      letterSpacing: em('0.5px'),
      minWidth: em('88px'),
      padding: '0.8em 1.5em',
      transition: 'all 0.2s ease-in-out'
    }
  },
  sizes: {
    default: fontSizes.base,
    xsmall: fontSizes.tiny,
    small: fontSizes.small,
    medium: fontSizes.h4,
    large: fontSizes.h3,
    xlarge: fontSizes.h2
  }
}
