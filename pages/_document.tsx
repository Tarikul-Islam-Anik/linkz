import { Html, Head, Main, NextScript } from 'next/document'
import data from 'data/data.json'

export default function Document() {
  return (
    <Html lang="en" style={{ backgroundColor: data.background }} className="scroll-smooth">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
