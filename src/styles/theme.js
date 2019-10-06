import { colors, shadows } from './vars'

// prettier-ignore
const theme = {
  colors,
  shadows,
  borderWidths: [
    0, '0.0625rem', '0.125rem', '0.25rem', '0.5rem', '1rem', '2rem'
  ],
  breakpoints: {
    tablet: '769px',
    desktop: '1024px',
    widescreen: '1216px',
    fullhd: '1408px',
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'inherit',
    code: 'Consolas, monaco, monospace',
  },
  fontSizes: {
    tiny: '0.75rem',
    small: '0.875rem',
    base: '1rem',
    h3: '1.25rem',
    h2: '1.75rem',
    h1: '2.5rem',
    subtitle: '3rem',
    title: '4.25rem',
    subheading: '5rem',
    heading: '6rem',
  },
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  radii: {
    none: 0,
    curved: '0.25rem',
    rounded: '0.5rem',
    pill: 9999,
    circle: '100%',
  },
  sizes: [ 
    0, '0.0625rem', '0.125rem', '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem', '32rem', '64rem' 
  ],
  space: [ 
    0, '0.0625rem', '0.125rem', '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem', '32rem' 
  ],
}

theme.sizes.avatar = 48
theme.sizes.icon = 24

export default theme
