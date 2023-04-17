import { OptionsProvider } from '@/contexts/OptionsContext'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OptionsProvider>
      <Head>
        <title>Japanese counters</title>
      </Head>
      <Component {...pageProps} />
    </OptionsProvider>
  )
}
