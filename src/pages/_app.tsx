import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { motion } from 'framer-motion'
import { PagesCountProvider } from '~/contexts/pagesCount'

export default function App({ Component, pageProps, router }: AppProps) {
  return <PagesCountProvider>
    <Component {...pageProps} />
  </PagesCountProvider>
}
