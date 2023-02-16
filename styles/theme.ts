import { MantineThemeOverride } from '@mantine/core'
import customComponents from './components'

const theme: MantineThemeOverride = {
  // Defines color scheme for all components, defaults to "light"
  colorScheme: 'dark',

  // Default border-radius used for most elements
  defaultRadius: '8px',

  // Object of arrays with 10 colors
  colors: {
    lime: ['#d7fe38'],
    orenji: ['#f3ef53'],
    bgLight: ['#e9e7dd'],
    bgDark: ['#181818'],
  },

  // Should be key of theme.colors, cannot be actual color value
  primaryColor: 'dark',

  // font-family and line-height used in most components
  fontFamily:
    'General Sans, Helvetica, Arial, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, sans-serif',

  // h1-h6 styles, used in Title and TypographyStylesProvider components
  headings: {
    // fontFamily: 'Lora, serif',
    fontFamily: 'ZillaSlab, General Sans, sans-serif',
    fontWeight: 600,
    sizes: {
      h2: { fontSize: 28 },
    },
  },

  other: {
    menuHeight: '48px',

    font: {
      slab: {
        fontFamily: 'ZillaSlab, sans-serif',
        fontWeight: 600,
      },
    },

    flexCenter: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },

    userDrag: {
      none: {
        WebkitUserDrag: 'none',
        KhtmlUserDrag: 'none',
        MozUserDrag: 'none',
        OUserDrag: 'none',
        userDrag: 'none',
      },
    },

    userSelect: {
      none: {
        WebkitUserSelect: 'none',
        KhtmlUserSelect: 'none',
        MozUserSelect: 'none',
        userSelect: 'none',
      },
    },
  },

  components: customComponents,
}

export default theme
