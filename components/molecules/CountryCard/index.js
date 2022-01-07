import React from 'react'
import Link from 'next/link'

import Title from '../../atoms/Title'
import InfoItem from '../../atoms/InfoItem'
import { Container, InfoContainer } from './styles'

function CountryCard({ country }) {
  return (
    <Link
      href={{
        pathname: '/detail/[country]',
        query: { country: country.name.common }
      }}
    >
      <Container>
        <img src={country.flags.png} alt={`${country.name.common} flag`} />
        <InfoContainer>
          <Title>{country.name.common}</Title>
          <InfoItem label={'Population:'} value={country.population} />
          <InfoItem label={'Region:'} value={country.continents} />
          <InfoItem label={'Capital:'} value={country.capital || '-'} />
        </InfoContainer>
      </Container>
    </Link>
  )
}

export default CountryCard
