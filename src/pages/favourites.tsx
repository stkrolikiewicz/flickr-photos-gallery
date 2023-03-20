import { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Layout, PhotosColumn, PhotosRow } from '~/components'
import { FavouritesPhotosContext, SetFavouritesContext } from '~/contexts/favourites'

const Favourites: NextPage = () => {
  const isMobile = useMediaQuery({ query: 'screen and (max-width: 768px)' })
  const favourites = useContext(FavouritesPhotosContext)
  const setFavourites = useContext(SetFavouritesContext)
  return (
    <>
      <Head>
        <title>Favourites Photos</title>
        <meta name="description" content="Favourites Photos Gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout favourite>
        <button className="border px-2 rounded-md hover:bg-light hover:text-stone " onClick={() => setFavourites([])}>Clear all favourites</button>
        {
          isMobile ?
            <PhotosColumn photos={favourites} />
            : <PhotosRow photos={favourites} />
        }
      </Layout>
    </>
  )
}

export default Favourites