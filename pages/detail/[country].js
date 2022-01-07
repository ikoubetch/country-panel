import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { getByName, getByCode } from '../../services/contryServices'

import { FaArrowLeft } from 'react-icons/fa'
import FlexContainer from '../../components/atoms/FlexContainer'
import Button from '../../components/atoms/Button'
import Title from '../../components/atoms/Title'
import InfoCard from '../../components/molecules/InfoCard'
import InfoItem from '../../components/atoms/InfoItem'

function Detail() {
  const router = useRouter()
  const { country } = router.query

  const [countryData, setCountryData] = useState(null)

  useEffect(() => {
    const getCountry = async () => {
      const res = await getByName(encodeURIComponent(country))

      const resBorders = await Promise.all(
        res.data[0].borders.map((border) => getByCode(border))
      )

      setCountryData({
        ...res.data[0],
        bordersFull: resBorders.map((x) => x.data)
      })
    }
    if (country) getCountry()
  }, [country])

  return (
    <>
      <Link href={'/'}>
        <Button shadow paddingX="50px" height="45px" margin="30px">
          <FaArrowLeft />
          Back
        </Button>
      </Link>
      <FlexContainer paddingX="30px">
        <FlexContainer align="space-between">
          <img
            src={countryData?.flags.png}
            alt={`${countryData?.name.common} flag`}
          />
          <FlexContainer
            maxWidth="600px"
            align="start"
            paddingY="20px"
            direction="column"
          >
            <Title fontSize="24px">{countryData?.name.common}</Title>
            {countryData && <InfoCard country={countryData} />}
            {countryData && (
              <InfoItem
                label="Border Countries:"
                value={countryData.bordersFull.map((x) => (
                  <Link
                    href={{
                      pathname: '/detail/[country]',
                      query: { country: x.name }
                    }}
                    key={x.name}
                  >
                    <Button height="35px" paddingX="20px" margin="10px" shadow>
                      {x.name}
                    </Button>
                  </Link>
                ))}
              />
            )}
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </>
  )
}

export default Detail
