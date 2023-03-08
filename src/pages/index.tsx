import { ArrowDownIcon } from '@heroicons/react/24/solid'
import Head from 'next/head'
import { useState } from 'react'
import { Layout, PhotosList } from '~/components'

export default function Home() {
  const [cnt, setCnt] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const pages = []

  for (let i = 0; i < cnt; i++) {
    pages.push(<PhotosList index={i + 1} key={i + 1} setIsLoading={setIsLoading} />)
  }

  return (
    <>
      <Head>
        <title>Photos Gallery</title>
        <meta name="description" content="Flickr's Photos Gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout home>
        {pages}
        {!isLoading && <button className='p-3 flex flex-col justify-center h-[120px] items-center text-gray transition hover:translate-y-3' onClick={() => {
          setIsLoading(true)
          setCnt(cnt + 1)
        }}>
          <h4>Load More</h4>
          <ArrowDownIcon className='h-6' />
        </button>}
      </Layout>
    </>
  )
}