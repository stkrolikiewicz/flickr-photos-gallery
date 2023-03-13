import { PhotoInfo } from "~/types"
import Image from "next/image"
// import styles from "./ImageCard.module.css"
import { UserCircleIcon, CalendarIcon } from '@heroicons/react/24/solid'
import { blurDataURL } from "~/utils/blurDataURL"
import { motion } from "framer-motion"
import { renderHTML } from "~/utils/renderHTML"

interface Props {
  photo: PhotoInfo
}

const ImageCard = ({ photo }: Props) => {
  return (
    <motion.div className="z-50 flex flex-col  items-center bg-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <Image
        placeholder='blur'
        blurDataURL={blurDataURL}
        className="mx-2 shadow-sm shadow-black animate-pulse"
        src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        width={500}
        height={500}
        alt={photo.title}
        onLoadingComplete={(e) => console.log(e.classList.remove('animate-pulse'))}
      />
      <div className="flex flex-col items-center gap-3 object-cover py-4">
        <h4 className="text-center font-thin italic text-light backdrop-blur-md">{photo.title}</h4>
        <div className="flex flex-col items-center gap-3 pb-3 text-gray sm:flex-row">
          <div className="flex items-center gap-3 backdrop-blur-md sm:border-r">
            <UserCircleIcon className="h-[18px]" />
            <h4 className="pr-3 font-bold">{photo.owner}</h4>
          </div>
          <div className="flex items-center gap-3 backdrop-blur-md">
            <CalendarIcon className="h-[18px]" />
            <h4>{photo.date}</h4>
          </div>
        </div>
        {photo.description && renderHTML(photo.description, "break-all text-justify backdrop-blur-md")}
      </div>
    </motion.div>
  )
}

export default ImageCard