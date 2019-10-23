import { borderWidths, radii } from './variables/base/borders'
import { colors } from './variables/base/colors'
import {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights
} from './variables/base/typography'
import { shadows } from './variables/base/shadows'
import { sizes } from './variables/base/sizes'
import { space } from './variables/base/space'

import { buttons } from './variables/elements/buttons'

// prettier-ignore
export const theme = {
  borderWidths,
  buttons,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  breakpoints: {
    tablet: '769px',
    desktop: '1024px',
    widescreen: '1216px',
    fullhd: '1408px',
  },
  sizes: [ 
    0, '0.0625rem', '0.125rem', '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem', '32rem', '64rem' 
  ],
}

theme.sizes.avatar = 48
theme.sizes.icon = 24

// export default theme;
