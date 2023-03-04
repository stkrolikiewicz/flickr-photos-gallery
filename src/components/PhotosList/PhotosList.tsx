import usePhotos from "~/hooks/usePhotos"
import PhotosRow from "../PhotosRow/PhotosRow"

interface Props {
  index: number,
}

const PhotosList = ({ index }: Props) => {
  const { data, isLoading, isValidating, error } = usePhotos(index)

  const photos = isLoading ? null : data?.photo

  return (
    <>
      {isValidating && <h1>Validating...</h1>}
      {
        isLoading ? <h2>Loading...</h2> : photos && <PhotosRow photos={photos} />
      }
      {error && <h2>Error: {error.message}</h2>}
    </>
  )
}

export default PhotosList