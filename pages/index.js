import React, { useEffect, useState } from 'react'
import FlexContainer from '../components/atoms/FlexContainer'
import CountryCard from '../components/molecules/CountryCard'

import { getAllCountries } from '../services/contryServices'
export default function Home() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const getAll = async () => {
      const res = await getAllCountries()

      setCountries(res.data)
    }

    getAll()
  }, [])
  return (
    <FlexContainer>
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </FlexContainer>
  )
}
