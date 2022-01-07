import React from 'react'
import InfoItem from '../../atoms/InfoItem'

import { Container } from './styles'

function InfoCard({ country }) {
  return (
    <Container>
      <div>
        <InfoItem
          label={'Native Name:'}
          value={Object.values(country.name.nativeName)
            .map((x) => x.common)
            .join(
              Object.values(country.name.nativeName).length !== 1 ? ', ' : ''
            )}
        />
        <InfoItem label={'Population:'} value={country.population} />
        <InfoItem label={'Region:'} value={country.continents} />
        <InfoItem label={'Sub Region:'} value={country.subregion} />
        <InfoItem label={'Capital:'} value={country.capital || '-'} />
      </div>

      <div>
        <InfoItem
          label={'Top level Domain:'}
          value={country.tld.join(country.tld.length !== 1 ? ', ' : '')}
        />
        <InfoItem
          label={'Currencies:'}
          value={Object.values(country.currencies)
            .map((x) => x.name)
            .join(Object.values(country.currencies).length !== 1 ? ', ' : '')}
        />
        <InfoItem
          label={'Languages:'}
          value={Object.values(country.languages).join(
            Object.values(country.languages).length !== 1 ? ', ' : ''
          )}
        />
      </div>
    </Container>
  )
}

export default InfoCard
