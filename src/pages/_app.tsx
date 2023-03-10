import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { PagesCountProvider } from '~/contexts/pagesCount'

export default function App({ Component, pageProps }: AppProps) {
  return <PagesCountProvider>
    <Component {...pageProps} />
  </PagesCountProvider>
}
