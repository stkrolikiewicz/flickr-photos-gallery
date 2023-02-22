import { InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { getDogsPhotos } from '~/lib/Flickr'
import { Photo } from '~/types'

export const getServerSideProps = async () => {
  const photos = await getDogsPhotos()
  return {
    props: {
      photos
    },
  }
}

export default function Home({ photos }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Photos Gallery</title>
        <meta name="description" content="Flickr's Photos Gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Flickr&apos;s Photos Gallery</h1>
        {photos?.map((photo: Photo, index: number) => (
          <Image
            key={index}
            src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            width={500}
            height={500}
            alt={photo.title}
          />
        ))}
      </main>
    </>
  )
}