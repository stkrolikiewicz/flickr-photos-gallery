import { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '~/components'

const ServerSideError: NextPage = () => {
  return (
    <>
      <Head>
        <title>500 - Server-Side Error</title>
        <meta name="description" content="500: Server-side Error Occurred" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Error 500: Server-Side Error Occurred!</h1>
      </Layout>
    </>
  )
}

export default ServerSideError