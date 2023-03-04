import usePhotos from "~/hooks/usePhotos"
import PhotosRow from "../PhotosRow/PhotosRow"

interface Props {
  index: number,
}

const PhotosList = ({ index }: Props) => {
  const { data, isLoading, isValidating, error } = usePhotos(index)

  const photos = isLoading ? null : data?.photo
  const oddRow = photos?.slice(0, 50)
  const evenRow = photos?.slice(50, 100)

  return (
    <>
      {
        isLoading || isValidating ? <h2>Loading...</h2> : oddRow && evenRow && <>
          <PhotosRow photos={oddRow} odd />
          <PhotosRow photos={evenRow} />
        </>
      }
      {error && <h2>Error: {error.message}</h2>}
    </>
  )
}

export default PhotosList