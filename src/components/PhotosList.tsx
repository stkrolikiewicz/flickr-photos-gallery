import usePhotos from "~/hooks/usePhotos"
import { Photo } from "~/types"
import Image from "next/image"
import { useEffect } from "react"
import Link from "next/link"

interface Props {
  index: number,
}

const PhotosList = ({ index }: Props) => {
  const { data, isLoading, isValidating, error } = usePhotos(index)

  const photos = isLoading ? null : data?.photo

  useEffect(() => {
    console.log(photos)
  }, [photos])

  return (
    <>
      {isValidating && <h1>Validating...</h1>}
      {isLoading ? <h2>Loading...</h2>
        : <div>
          {photos?.map((photo: Photo) => (
            <>
              <h1>{photo.id}</h1>
              <Link key={photo.id} href={`/photos/${photo.id}`}>
                <Image
                  src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                  width={200}
                  height={200}
                  alt={photo.title}
                />
              </Link>
            </>
          ))}
          <h1 className='bg-slate-500 font-bold'>END of list no {index}.</h1>
        </div>
      }
      {error && <h2>Error: {error.message}</h2>}
    </>
  )
}

export default PhotosList