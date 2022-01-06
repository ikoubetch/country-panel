import React from 'react'

import Title from '../../atoms/Title'
import { Container, InfoContainer } from './styles'

function CountryCard({ country }) {
  return (
    <Container>
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <InfoContainer>
        <Title>{country.name.common}</Title>
        <div>
          <span>Population:</span> {country.population}
        </div>
        <div>
          <span>Region</span> {country.continents}
        </div>
        <div>
          <span>Capital:</span> {country.capital || '-'}
        </div>
      </InfoContainer>
    </Container>
  )
}

export default CountryCard
