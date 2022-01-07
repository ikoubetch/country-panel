import React, { useContext } from 'react'
import DataContext from '../../../hooks/dataContext'
import SelectField from '../../atoms/SelectField'
import TextField from '../../atoms/TextField'

import { Container } from './styles'

function FilterOptions() {
  const {
    searchText,
    setSearchText,
    regionOptions,
    regionSelected,
    setRegionSelected
  } = useContext(DataContext)

  return (
    <Container>
      <TextField
        placeholder={'🔍 Search for a country...'}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <SelectField
        placeholder="Filter by Region"
        value={regionSelected}
        onChange={(e) => setRegionSelected(e.target.value)}
        options={regionOptions.map((region) => ({
          value: region,
          label: region
        }))}
      />
    </Container>
  )
}

export default FilterOptions
