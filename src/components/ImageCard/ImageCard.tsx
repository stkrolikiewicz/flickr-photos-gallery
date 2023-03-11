import { PhotoInfo } from "~/types"
import Image from "next/image"
import styles from "./ImageCard.module.css"
import { UserCircleIcon, CalendarIcon } from '@heroicons/react/24/solid'
import { blurDataURL } from "~/utils/blurDataURL"
import { motion } from "framer-motion"
import { renderHTML } from "~/utils/renderHTML"

interface Props {
  photo: PhotoInfo
}

const ImageCard = ({ photo }: Props) => {
  return (
    <motion.div className={styles.container} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <Image
        placeholder='blur'
        blurDataURL={blurDataURL}
        className={`${styles.image} animate-pulse`}
        src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        width={500}
        height={500}
        alt={photo.title}
        onLoadingComplete={(e) => console.log(e.classList.remove('animate-pulse'))}
      />
      <div className={styles.content}>
        <h4 className={styles.title}>{photo.title}</h4>
        <div className={styles.cardHeader}>
          <div className={`${styles.owner} ${styles.item}`}>
            <UserCircleIcon className="h-[18px]" />
            <h4 className="pr-3 font-bold">{photo.owner}</h4>
          </div>
          <div className={`${styles.date} ${styles.item}`}>
            <CalendarIcon className="h-[18px]" />
            <h4>{photo.date}</h4>
          </div>
        </div>
        {photo.description && renderHTML(photo.description, styles.description)}
      </div>
    </motion.div>
  )
}

export default ImageCard