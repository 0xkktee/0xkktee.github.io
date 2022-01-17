// styles/theme.ts
import { createTheme, Theme } from '@mui/material/styles'

declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
  },
})

export default theme
