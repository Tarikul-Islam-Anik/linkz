import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from '@next/font/google'

const nunitoVariable = Nunito()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${nunitoVariable.className}`}>
      <Component {...pageProps} />
    </main>
  )
}
