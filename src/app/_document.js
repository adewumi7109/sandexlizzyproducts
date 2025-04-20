// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="google-site-verification=w-1lkQ3iXtIz9uO0hwe_My2nySzP8pqUeThdybvwrcU" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
