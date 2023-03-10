import { PhotoInfo } from "~/types"
import Image from "next/image"
import styles from "./ImageCard.module.css"
import { UserCircleIcon, CalendarIcon } from '@heroicons/react/24/solid'
import { blurDataURL } from "~/utils/blurDataURL"

interface Props {
  photo: PhotoInfo
}

const ImageCard = ({ photo }: Props) => {
  return (
    <div className={styles.container}>
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
          <UserCircleIcon className="h-[18px]" />
          <h4 className="pr-3 border-r font-bold">{photo.owner}</h4>
          <CalendarIcon className="h-[18px]" />
          <h4>{photo.date}</h4>
        </div>
        {photo.description && <p className={styles.description}>{photo.description}</p>}
      </div>
    </div>
  )
}

export default ImageCard