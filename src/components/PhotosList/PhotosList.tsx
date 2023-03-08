import { SetStateAction, useEffect } from "react"
import usePhotos from "~/hooks/usePhotos"
import Loader from "../Loader/Loader"
import PhotosRow from "../PhotosRow/PhotosRow"

interface Props {
  index: number,
  setIsLoading?: React.Dispatch<SetStateAction<boolean>>
}

const PhotosList = ({ index, setIsLoading }: Props) => {
  const { data, isLoading, isValidating, error } = usePhotos(index)

  const photos = isLoading ? null : data?.photo
  const oddRow = photos?.slice(0, 50)
  const evenRow = photos?.slice(50, 100)

  useEffect(() => {
    setIsLoading && setIsLoading(isLoading)
  }, [isLoading, setIsLoading])

  return (
    <>
      {
        isLoading || isValidating ? <Loader /> : oddRow && evenRow && <>
          <PhotosRow photos={oddRow} odd />
          <PhotosRow photos={evenRow} />
        </>
      }
      {error && <h2>Error: {error.message}</h2>}
    </>
  )
}

export default PhotosList