import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import { Layout, PhotosList } from '~/components'
import { usePagesCountState } from '~/hooks/usePagesCountContext'

export default function Home() {
  const [cnt] = usePagesCountState()
  return (
    <>
      <Head>
        <title>Photos Gallery</title>
        <meta name="description" content="Flickr's Photos Gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout home>
        <AnimatePresence mode='wait' initial={false}>
          <PhotosList index={cnt} key={cnt} />
        </AnimatePresence>
      </Layout>
    </>
  )
}