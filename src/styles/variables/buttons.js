import { fontSizes } from "./typography";
import { em, readableColor as rc, darken, lighten } from "polished";
import { colors, fontWeights, radii, shadows, space } from "./index";

const {
  primary,
  secondary,
  tertiary,
  accent,
  white,
  light,
  dark,
  offBlack,
  black,
  info,
  error,
  success,
  warning,
  code
} = colors;

export const buttons = {
  base: {
    default: {
      border: "none",
      borderRadius: radii.none,
      boxShadow: shadows.none,
      fontWeight: fontWeights.bold,
      letterSpacing: em("0.5px"),
      minWidth: em("88px"),
      padding: "0.8em 1.5em",
      transition: "all 0.2s ease-in-out"
    }
  },
  size: {
    default: {
      fontSize: fontSizes.base
    },
    tiny: {
      fontSize: fontSizes.tiny
    },
    small: {
      fontSize: fontSizes.small
    },
    medium: {
      fontSize: fontSizes.h3
    },
    large: {
      fontSize: fontSizes.h2
    }
  },
  style: {
    default: {
      backgroundColor: primary,
      color: rc(primary),
      "&:hover": {
        backgroundColor: darken(0.1, primary),
        color: rc(darken(0.1, primary))
      }
    },
    primary: {
      backgroundColor: primary,
      color: rc(primary),
      "&:hover": {
        backgroundColor: darken(0.1, primary),
        color: rc(darken(0.1, primary))
      }
    },
    secondary: {
      backgroundColor: secondary,
      color: rc(secondary),
      "&:hover": {
        backgroundColor: darken(0.1, secondary),
        color: rc(darken(0.1, secondary))
      }
    },
    tertiary: {
      backgroundColor: tertiary,
      color: rc(tertiary),
      "&:hover": {
        backgroundColor: darken(0.1, tertiary),
        color: rc(darken(0.1, tertiary))
      }
    },
    accent: {
      backgroundColor: accent,
      color: rc(accent),
      "&:hover": {
        backgroundColor: darken(0.1, accent),
        color: rc(darken(0.1, accent))
      }
    },
    white: {
      backgroundColor: white,
      color: black,
      "&:hover": {
        backgroundColor: darken(0.1, white),
        color: rc(darken(0.1, white))
      }
    },
    light: {
      backgroundColor: light,
      color: dark,
      "&:hover": {
        backgroundColor: darken(0.1, light),
        color: rc(darken(0.1, light))
      }
    },
    offBlack: {
      backgroundColor: offBlack,
      color: light,
      "&:hover": {
        backgroundColor: lighten(0.1, offBlack),
        color: rc(lighten(0.1, offBlack))
      }
    },
    black: {
      backgroundColor: black,
      color: white,
      "&:hover": {
        backgroundColor: lighten(0.1, black),
        color: rc(lighten(0.1, black))
      }
    },
    dark: {
      backgroundColor: dark,
      color: light,
      "&:hover": {
        backgroundColor: lighten(0.1, dark),
        color: rc(lighten(0.1, dark))
      }
    },
    info: {
      backgroundColor: info,
      color: rc(info),
      "&:hover": {
        backgroundColor: darken(0.1, info),
        color: rc(darken(0.1, info))
      }
    },
    error: {
      backgroundColor: error,
      color: rc(error),
      "&:hover": {
        backgroundColor: darken(0.1, error),
        color: rc(darken(0.1, error))
      }
    },
    success: {
      backgroundColor: success,
      color: rc(success),
      "&:hover": {
        backgroundColor: darken(0.1, success),
        color: rc(darken(0.1, success))
      }
    },
    warning: {
      backgroundColor: warning,
      color: rc(warning),
      "&:hover": {
        backgroundColor: darken(0.1, warning),
        color: rc(darken(0.1, warning))
      }
    },
    code: {
      backgroundColor: code,
      color: rc(code),
      "&:hover": {
        backgroundColor: darken(0.1, code),
        color: rc(darken(0.1, code))
      }
    },
    link: {
      backgroundColor: colors.link.base,
      color: rc(colors.link.base),
      "&:hover": {
        backgroundColor: darken(0.1, colors.link.base),
        color: rc(darken(0.1, colors.link.base))
      }
    }
  }
};
