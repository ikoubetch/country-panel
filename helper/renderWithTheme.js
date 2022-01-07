import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import theme from '../styles/theme/dark'

export const renderWithTheme = (children) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
