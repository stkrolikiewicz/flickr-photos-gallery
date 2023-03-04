import Head from 'next/head'
import { useState } from 'react'
import { Layout, PhotosList } from '~/components'

export default function Home() {
  const [cnt, setCnt] = useState(1)

  const pages = []

  for (let i = 0; i < cnt; i++) {
    pages.push(<PhotosList index={i + 1} key={i + 1} />)
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
        <button className='border rounded-lg p-3 bg-slate-500 hover:bg-slate-400' onClick={() => setCnt(cnt + 1)}>Load More</button>
      </Layout>
    </>
  )
}