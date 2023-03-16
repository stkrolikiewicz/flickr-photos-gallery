import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import { getPhotoInfoById, getAllPhotosIds } from "~/lib/Flickr"
import { Layout } from "~/components"
import ImageCard from "~/components/ImageCard/ImageCard"

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
    <Layout photoCard>
      {photo && <ImageCard photo={{ ...photo }} />}
    </Layout>
  )
}

export default Photo