import { Photo } from "~/types"
import Image from "next/image"
import { useEffect, useState, UIEvent, useRef } from "react"
import Link from "next/link"
import styles from "./PhotosRow.module.css"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid"
import { blurDataURL } from "~/utils/blurDataURL"
import { motion } from "framer-motion"

interface Props {
  photos: Photo[],
  odd?: boolean,
}

const PhotosRow = ({ photos, odd }: Props) => {
  const [scrollLeft, setScrollLeft] = useState<number>(0)
  const [maxLeft, setMaxLeft] = useState<number>(10588)
  const rowRef = useRef<HTMLDivElement>(null)
  const imageWidth = 180
  const rowGap = 16
  const scrollOffset = 25 * (imageWidth + rowGap)

  useEffect(() => {
    const handleResize = () => {
      rowRef.current && setMaxLeft(rowRef.current.scrollWidth - rowRef.current.clientWidth)
      console.log("resize")
    }
    window.addEventListener('resize', handleResize)
    odd ? rowRef.current?.scrollTo({
      left: scrollOffset + imageWidth / 2,
    }) : rowRef.current?.scrollTo({
      left: scrollOffset,
    })
  }, [odd, scrollOffset])

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
    <motion.div className={styles.photosWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      {scrollLeft < maxLeft && <button className={`${styles.slideButton} ${styles.slideRight}`} onClick={slideRight}>
        <ArrowRightIcon className="h-[20px]" />
      </button>}
      {scrollLeft > 0 && <button className={`${styles.slideButton} ${styles.slideLeft}`} onClick={slideLeft}>
        <ArrowLeftIcon className="h-[20px]" />
      </button>}
      <div ref={rowRef} className={styles.row} onScroll={handleScroll}>
        {photos?.map((photo: Photo) => (
          <Link className={styles.imageParent} key={photo.id} href={`/photos/${photo.id}`}>
            <Image
              id={photo.id}
              placeholder='blur'
              blurDataURL={blurDataURL}
              className={`${styles.image} animate-pulse`}
              src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
              fill
              alt={photo.title}
              onLoadingComplete={(e) => console.log(e.classList.remove('animate-pulse'))}
            />
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default PhotosRow