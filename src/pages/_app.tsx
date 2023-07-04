import "../global.css";
import "../loading.css";
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <><Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2E4LDXYBNV', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
      <Component {...pageProps} />
    </>
  )
}
