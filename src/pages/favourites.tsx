import { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'
import { Layout, PhotosColumn } from '~/components'
import { FavouritesPhotosContext } from '~/contexts/favourites'

const Favourites: NextPage = () => {
  const favourites = useContext(FavouritesPhotosContext)
  return (
    <>
      <Head>
        <title>Favourites Photos</title>
        <meta name="description" content="Favourites Photos Gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout favourite>
        {favourites.length == 0 && <h3>Favourites list is empty!</h3>}
        <PhotosColumn photos={favourites} />
      </Layout>
    </>
  )
}

export default Favourites