import Typography from "typography"
import fairyGates from "typography-theme-fairy-gates"

fairyGates.bodyFontFamily = ['Mandali'];
const typography = new Typography(fairyGates)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
