import { useState, useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LoadingScreen from '../components/LoadingScreen'

import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }
  return (
    <>
      <Head>
        <title>Metaverse</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
