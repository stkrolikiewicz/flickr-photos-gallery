import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { getPhotoInfoById, getAllPhotosIds } from "~/lib/Flickr"
import Image from "next/image"
import { Layout } from "~/components"

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

export default function Photo({ photo }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Image
        src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        width={500}
        height={500}
        alt={photo.title}
      />
    </Layout>
  )
}