import axios from 'axios'

export async function getAllCountries() {
  return await axios.get('https://restcountries.com/v3.1/all')
}

export async function getAllCountriesByRegion(region) {
  return await axios.get(`https://restcountries.com/v3.1/region/${region}`)
}

export async function getByName(country) {
  return await axios.get(
    `https://restcountries.com/v3.1/name/${country}?fullText=true`
  )
}

export async function getByCode(code) {
  return await axios.get(`https://restcountries.com/v2/alpha/${code}`)
}
