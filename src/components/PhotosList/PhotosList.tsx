import usePhotos from "~/hooks/usePhotos"
import { Photo } from "~/types"
import Image from "next/image"
import { useEffect, useState, UIEvent, useRef } from "react"
import Link from "next/link"
import styles from "./PhotosList.module.css"

interface Props {
  index: number,
}

const PhotosList = ({ index }: Props) => {
  const { data, isLoading, isValidating, error } = usePhotos(index)

  const photos = isLoading ? null : data?.photo
  const [scrollLeft, setScrollLeft] = useState<number>(0)
  const [maxLeft, setMaxLeft] = useState<number>(10588)
  const rowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      rowRef.current && setMaxLeft(rowRef.current.scrollWidth - rowRef.current.clientWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  const slideLeft = () => {
    rowRef.current?.scrollTo({
      left: Math.max(rowRef.current?.scrollLeft - rowRef.current?.clientWidth, 0),
      behavior: 'smooth'
    })
  }
  const slideRight = () => {
    rowRef.current?.scrollTo({
      left: Math.min(rowRef.current?.scrollLeft + rowRef.current?.clientWidth, rowRef.current?.scrollWidth),
      behavior: 'smooth'
    })
  }

  const handleScroll = (event: UIEvent) => {
    setScrollLeft(event.currentTarget.scrollLeft)
    setMaxLeft(event.currentTarget.scrollWidth - event.currentTarget.clientWidth)
  }

  return (
    <>
      {isValidating && <h1>Validating...</h1>}
      {
        isLoading ? <h2>Loading...</h2>
          : <div className={styles.photosWrapper}>
            {scrollLeft < maxLeft && <button className={`${styles.slideButton} ${styles.slideRight}`} onClick={slideRight}>
              Slide right →
            </button>}
            {scrollLeft > 0 && <button className={`${styles.slideButton} ${styles.slideLeft}`} onClick={slideLeft}>
              ← Slide left
            </button>}
            <div ref={rowRef} className={styles.row} onScroll={handleScroll}>
              {photos?.map((photo: Photo) => (
                <Link className={styles.imageParent} key={photo.id} href={`/photos/${photo.id}`}>
                  <Image
                    className={styles.image}
                    src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                    fill
                    alt={photo.title}
                  />
                </Link>
              ))}
            </div>
          </div>
      }
      {error && <h2>Error: {error.message}</h2>}
    </>
  )
}

export default PhotosList