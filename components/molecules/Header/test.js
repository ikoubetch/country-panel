import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../helper/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'
import Header from './index'

it('should render title', () => {
  renderWithTheme(<Header theme="dark" />)
  expect(screen.getByText('Where in the world?')).toBeInTheDocument()
})

it('should render button', () => {
  renderWithTheme(<Header theme="dark" />)
  expect(screen.getByRole('button', { name: 'Light Mode' })).toBeInTheDocument()
})

it('button should clicked', () => {
  const fn = jest.fn()
  renderWithTheme(<Header theme="dark" onClickSwitchMode={fn} />)

  screen.getByRole('button').click()

  expect(fn).toBeCalledTimes(1)
})
