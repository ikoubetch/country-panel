import React, { useEffect, useState, useContext } from 'react'
import FlexContainer from '../components/atoms/FlexContainer'
import CountryCard from '../components/molecules/CountryCard'
import FilterOptions from '../components/molecules/FilterOptions'
import DataContext from '../hooks/dataContext'

import {
  getAllCountries,
  getAllCountriesByRegion
} from '../services/contryServices'
export default function Home() {
  const [countries, setCountries] = useState([])
  const { searchText, setRegionOptions, regionSelected } =
    useContext(DataContext)

  useEffect(() => {
    const getAll = async () => {
      const res = await getAllCountries()

      setCountries(res.data)
      setRegionOptions([...new Set(res.data.map((contry) => contry.region))])
    }

    const getByRegion = async () => {
      const res = await getAllCountriesByRegion(regionSelected)

      setCountries(res.data)
    }

    if (regionSelected === '') getAll()
    else getByRegion()
  }, [regionSelected, setRegionOptions])

  return (
    <>
      <FilterOptions />
      <FlexContainer>
        {countries
          .filter((x) =>
            x.name.common.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
      </FlexContainer>
    </>
  )
}
