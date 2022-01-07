import { createContext } from 'react'

const DataContext = createContext({
  loading: false,
  searchText: '',
  regionOptions: [],
  regionSelected: ''
})

export default DataContext
