import Head from 'next/head'

export default function Home() {
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
      </main>
    </>
  )
}

// https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=06fe421ea76dcc08939e8e4202b4d933&text=dogs&format=json&nojsoncallback=1