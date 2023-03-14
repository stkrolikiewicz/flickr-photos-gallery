import { useState } from "react"
import usePhotos from "~/hooks/usePhotos"
import Loader from "../Loader/Loader"
import PhotosRow from "../PhotosRow/PhotosRow"
import { useMediaQuery } from "react-responsive"
import PhotosColumn from "../PhotosColumn/PhotosColumn"
import { motion } from "framer-motion"
import { Direction } from "~/types"
import { usePagesCountState } from "~/hooks/usePagesCountContext"
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid"
import styles from "./PhotosList.module.css"

interface Props {
  index: number,
}

const PhotosList = ({ index }: Props) => {
  const { data, isLoading, isValidating, error } = usePhotos(index)
  const photos = isLoading ? null : data?.photo
  const oddRow = photos?.slice(0, 50)
  const evenRow = photos?.slice(50, 100)
  const [cnt, setCnt] = usePagesCountState()
  const [direction, setDirection] = useState<Direction>("")

  const loading = isLoading || isValidating

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const variants = {
    "next": {
      y: 100,
      opacity: 0
    },
    "previous": {
      y: -100,
      opacity: 0
    },
    "nextExit": {
      y: -100,
      opacity: 0
    },
    "previousExit": {
      y: 100,
      opacity: 0
    },
    "": {
      y: 0,
      opacity: 0
    },
    "Exit": {
      y: -100,
      opacity: 0
    }
  }
  return (
    <>
      {!loading && cnt > 1 && <motion.button initial={{ height: cnt == 2 && direction === "next" ? 0 : 120 }} animate={{ height: 120, transition: { delay: cnt == 2 && direction === "next" ? 0.5 : 0 }, opacity: 1 }}
        className={`${styles.button} ${styles.previous}`} onClick={() => {
          setDirection("previous")
          setCnt(cnt - 1)
        }}>
        <ArrowUpIcon className='h-6' />
      </motion.button>}
      <motion.div initial={direction} animate={{ y: 0, opacity: 1 }} exit={`${direction}Exit`} variants={variants}>
        {cnt == 1 && <motion.div initial={{ height: 120 }} animate={{ height: 0 }} transition={{ delay: 0.5 }} />}
        {
          loading ? <Loader />
            : isMobile ? photos && <PhotosColumn photos={photos} />
              : oddRow && evenRow &&
              <>
                <PhotosRow photos={oddRow} odd />
                <PhotosRow photos={evenRow} />
              </>
        }
        {error && <h2>Error: {error.message}</h2>}
      </motion.div>
      {
        !loading && cnt < 600 && <button
          className={`${styles.button} ${styles.next}`}
          onClick={() => {
            setDirection("next")
            setCnt(cnt + 1)
          }}>
          <ArrowDownIcon className='h-6' />
        </button>
      }
    </>
  )
}

export default PhotosList