import { Photo } from "~/types"
import Image from "next/image"
import { useEffect, useState, UIEvent, useRef } from "react"
import Link from "next/link"
import styles from "./PhotosRow.module.css"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid"
import { blurDataURL } from "~/utils/blurDataURL"
import { motion } from "framer-motion"
import { useFirstLoad } from "~/hooks/useFirstLoad"
import { clsx } from "clsx"
import { scrollLeft, scrollRight } from "~/utils/rowScroll"
import LikeButton from "../LikeButton/LikeButton"

interface Props {
  photos: Photo[],
  odd?: boolean,
}

const PhotosRow = ({ photos, odd }: Props) => {
  const [firstTime, setFirstTime] = useFirstLoad()
  const [scrollLeftPosition, setScrollLeftPosition] = useState<number>(0)
  const [maxLeft, setMaxLeft] = useState<number>(10588)
  const rowRef = useRef<HTMLDivElement>(null)
  const imageWidth = 180
  const rowGap = 16
  const scrollOffset = 25 * (imageWidth + rowGap)
  useEffect(() => {
    const handleResize = () => {
      rowRef.current && setMaxLeft(rowRef.current.scrollWidth - rowRef.current.clientWidth)
    }
    window.addEventListener('resize', handleResize)
    odd ? rowRef.current?.scrollTo({
      left: scrollOffset + imageWidth / 2,
    }) : rowRef.current?.scrollTo({
      left: scrollOffset,
    })
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const slideLeft = () => {
    scrollLeft(rowRef)
    setFirstTime(false)
  }

  const slideRight = () => {
    scrollRight(rowRef)
    setFirstTime(false)
  }

  const handleScroll = (event: UIEvent) => {
    setScrollLeftPosition(event.currentTarget.scrollLeft)
    setMaxLeft(event.currentTarget.scrollWidth - event.currentTarget.clientWidth)
  }
  return (
    <motion.div className={styles.photosWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} onAnimationComplete={firstTime ? odd ? slideLeft : slideRight : () => { 0 }}>
      {scrollLeftPosition < maxLeft && <button className={`${styles.slideButton} ${styles.slideRight}`} onClick={slideRight}>
        <ArrowRightIcon className="h-[20px]" />
      </button>}
      {scrollLeftPosition > 0 && <button className={clsx(styles.slideButton, styles.slideLeft)} onClick={slideLeft}>
        <ArrowLeftIcon className="h-[20px]" />
      </button>}
      <div ref={rowRef} className={styles.row} onScroll={handleScroll}>
        {photos?.map((photo: Photo) => (
          <>
            <div className={styles.imageParent}>
              <LikeButton photo={photo} />
              <Link key={photo.id} href={`/photos/${photo.id}`} scroll={false}>
                <Image
                  id={photo.id}
                  placeholder='blur'
                  blurDataURL={blurDataURL}
                  className={`${styles.image} animate-pulse`}
                  src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                  fill
                  alt={photo.title}
                  onLoadingComplete={(e) => e.classList.remove('animate-pulse')}
                />
              </Link>
            </div>
          </>
        ))}
      </div>
    </motion.div >
  )
}

export default PhotosRow