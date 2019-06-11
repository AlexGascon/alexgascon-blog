import Typography from "typography"
import fairyGates from "typography-theme-fairy-gates"
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants";

const mainColor = "#1771F1"

fairyGates.bodyFontFamily = ['Mandali'];
fairyGates.headerColor = mainColor;
fairyGates.overrideThemeStyles = ({ adjustFontSizeTo, rhythm }, options, styles) => {
  return {
    a: {
      color: mainColor,
      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${mainColor} 1px, ${mainColor} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
    },
    "h1,h2,h3,h4,h5,h6": {
      marginBottom: rhythm(1.5),
    },
    blockquote: {
      borderLeft: `${rhythm(6 / 16)} solid ${mainColor}`,
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        borderLeft: `${rhythm(3 / 16)} solid ${mainColor}`,
      },
    },
  }
}

const typography = new Typography(fairyGates)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
