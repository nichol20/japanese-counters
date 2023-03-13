import { OptionsProvider } from '@/contexts/OptionsContext'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OptionsProvider>
      <Component {...pageProps} />
    </OptionsProvider>
  )
}
