import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from '@next/font/google'
import Head from 'next/head'
import data from 'data/data.json'
const nunitoVariable = Nunito()

export default function App({ Component, pageProps }: AppProps) {
  const { name, bio, background } = data
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={bio} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={background} />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <main className={`${nunitoVariable.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
