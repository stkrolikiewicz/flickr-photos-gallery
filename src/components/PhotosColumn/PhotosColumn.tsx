import { Photo } from "~/types"
import Image from "next/image"
import Link from "next/link"
import styles from "./PhotosColumn.module.css"
import { blurDataURL } from "~/utils/blurDataURL"
import { motion } from "framer-motion"
import LikeButton from "../LikeButton/LikeButton"

interface Props {
  photos: Photo[],
}

const PhotosColumn = ({ photos }: Props) => {

  return (
    <div className={styles.photosWrapper}>
      {photos?.map((photo: Photo) => (
        <motion.div key={photo.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className={styles.photoCard}>
          <Link className={styles.imageParent} href={`/photos/${photo.id}`} scroll={false}>
            <Image
              id={photo.id}
              placeholder='blur'
              blurDataURL={blurDataURL}
              className={`${styles.image} animate-pulse`}
              src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
              width={500}
              height={500}
              alt={photo.title}
              onLoadingComplete={(e) => e.classList.remove('animate-pulse')}
            />
          </Link>
          <LikeButton photo={photo} />
        </motion.div>
      ))
      }
    </div >
  )
}

export default PhotosColumn