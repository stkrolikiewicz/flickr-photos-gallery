import { AnimatePresence } from 'framer-motion'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Layout, PhotosList } from '~/components'
import { usePagesCountState } from '~/hooks/usePagesCountContext'

const Home: NextPage = () => {
  const router = useRouter()
  const pid = router.asPath.split('/#')[1]

  useEffect(() => {
    document.getElementById(pid)?.scrollIntoView()
  }, [pid])

  const [cnt] = usePagesCountState()

  const pages = []
  for (let i = 0; i < cnt; i++) {
    pages.push(<PhotosList index={i + 1} key={i + 1} next={i + 1 < cnt ? true : false} />)
  }


  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
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
          {isMobile ? pages : <PhotosList index={cnt} key={cnt} />}
        </AnimatePresence>
      </Layout>
    </>
  )
}

export default Home