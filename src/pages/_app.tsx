import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { motion } from 'framer-motion'
import { PagesCountProvider } from '~/contexts/pagesCount'

export default function App({ Component, pageProps, router }: AppProps) {
  return <PagesCountProvider>
    <Component {...pageProps} />
  </PagesCountProvider>
  // return <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
  //   pageInitial: {
  //     opacity: 0
  //   },
  //   pageAnimate: {
  //     opacity: 1
  //   },
  //   pageExit: {
  //     opacity: 0
  //   }
  // }}>

  // </motion.div>
}
