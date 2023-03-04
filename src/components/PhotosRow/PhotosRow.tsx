import { Photo } from "~/types"
import Image from "next/image"
import { useEffect, useState, UIEvent, useRef } from "react"
import Link from "next/link"
import styles from "./PhotosRow.module.css"

interface Props {
  photos: Photo[],
  odd?: boolean
}

const PhotosRow = ({ photos, odd }: Props) => {
  const [scrollLeft, setScrollLeft] = useState<number>(0)
  const [maxLeft, setMaxLeft] = useState<number>(10588)
  const rowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      rowRef.current && setMaxLeft(rowRef.current.scrollWidth - rowRef.current.clientWidth)
      console.log("resize")
    }
    window.addEventListener('resize', handleResize)
    odd && rowRef.current?.scrollTo({
      left: 90,
    })
  }, [])

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
    <div className={styles.photosWrapper}>
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
  )
}

export default PhotosRow