import React, { useState } from 'react'
import GlobalStyle from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import light from '../styles/theme/light'
import dark from '../styles/theme/dark'
import Header from '../components/molecules/Header'

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState(dark)

  const switchMode = () => setMode(mode.title === 'light' ? dark : light)
  return (
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
  )
}

export default MyApp
