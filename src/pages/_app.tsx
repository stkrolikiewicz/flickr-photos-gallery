import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { PagesCountProvider } from '~/contexts/pagesCount'
import { AnimatePresence } from 'framer-motion'
import Router from "next/router"
import { useEffect, useState } from 'react'
import PageLoader from '~/components/PageLoader/PageLoader'
import Loader from '~/components/Loader/Loader'

export default function App({ Component, pageProps, router }: AppProps) {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])

  return <PagesCountProvider>
    <AnimatePresence mode='wait' initial={false}>
      {loading ? <PageLoader /> : <Component {...pageProps} key={router.asPath} />}
    </AnimatePresence>
  </PagesCountProvider>
}
