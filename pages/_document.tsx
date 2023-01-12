import { Html, Head, Main, NextScript } from 'next/document'
import data from 'data/data.json'

export default function Document() {
  const { name, bio, background } = data
  return (
    <Html lang="en" style={{ backgroundColor: data.background }} className="scroll-smooth">
      <Head>
        <title>{name}</title>
        <meta name="description" content={bio} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={background} />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
