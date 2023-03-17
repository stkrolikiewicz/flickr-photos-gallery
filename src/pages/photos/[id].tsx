import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import { getPhotoInfoById, getAllPhotosIds } from "~/lib/Flickr"
import { Layout } from "~/components"
import ImageCard from "~/components/ImageCard/ImageCard"
import Head from "next/head"

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPhotosIds()
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const photo = await getPhotoInfoById(params?.id as string)
  return {
    props: {
      photo,
    },
  }
}

const Photo: NextPage = ({ photo }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{photo.title}</title>
        <meta name="description" content={photo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout photoCard>
        {photo && <ImageCard photo={{ ...photo }} />}
      </Layout>
    </>
  )
}

export default Photo