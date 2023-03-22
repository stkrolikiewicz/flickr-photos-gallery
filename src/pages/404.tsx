import { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '~/components'

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Error 404: Page Not Found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Error 404: Page Not Found!</h1>
      </Layout>
    </>
  )
}

export default NotFound