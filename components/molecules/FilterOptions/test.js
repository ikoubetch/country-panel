import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from '../../../helper/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'
import FilterOptions from './index'

import DataContext from '../../../hooks/dataContext'

it('should render input text', () => {
  renderWithTheme(<FilterOptions />)
  expect(screen.getByRole('textbox')).toBeInTheDocument()
})

it('should change value input text', () => {
  const fn = jest.fn()
  renderWithTheme(
    <DataContext.Provider
      value={{
        setSearchText: fn,
        regionOptions: ['america', 'europa']
      }}
    >
      <FilterOptions />
    </DataContext.Provider>
  )
  const searchInput = screen.getByRole('textbox')
  fireEvent.change(searchInput, {
    target: { value: 'Brazil' }
  })
  expect(fn).toBeCalledTimes(1)
})

it('should render select input', () => {
  renderWithTheme(
    <DataContext.Provider
      value={{
        regionOptions: ['america', 'europa']
      }}
    >
      <FilterOptions />
    </DataContext.Provider>
  )

  expect(screen.getByRole('combobox')).toBeInTheDocument()
})

it('should change value input text', () => {
  const fn = jest.fn()
  renderWithTheme(
    <DataContext.Provider
      value={{
        setRegionSelected: fn,
        regionOptions: ['america', 'europa']
      }}
    >
      <FilterOptions />
    </DataContext.Provider>
  )
  const combobox = screen.getByRole('combobox')
  fireEvent.change(combobox, {
    target: { value: 'america' }
  })
  expect(fn).toBeCalledTimes(1)
})
