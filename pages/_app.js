import React, { useState } from 'react'
import GlobalStyle from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import DataContext from '../hooks/dataContext'

import light from '../styles/theme/light'
import dark from '../styles/theme/dark'
import Header from '../components/molecules/Header'

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState(dark)
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [regionOptions, setRegionOptions] = useState([])
  const [regionSelected, setRegionSelected] = useState('')

  const switchMode = () => setMode(mode.title === 'light' ? dark : light)
  return (
    <DataContext.Provider
      value={{
        loading,
        setLoading,
        searchText,
        setSearchText,
        regionOptions,
        setRegionOptions,
        regionSelected,
        setRegionSelected
      }}
    >
      <ThemeProvider theme={mode}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
        <Header theme={mode.title} onClickSwitchMode={switchMode} />
        <Component {...pageProps} />
      </ThemeProvider>
    </DataContext.Provider>
  )
}

export default MyApp
