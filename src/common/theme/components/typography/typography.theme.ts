import { ThemeComponentTypes } from '../types'

export const TypographyStyleOverrides: ThemeComponentTypes['MuiTypography'] = {
  defaultProps: {
    variantMapping: {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      // subtitle1: 'h4',
      // subtitle2: 'h5',
      body1: 'p',
      body2: 'p',
    },
  },
}
