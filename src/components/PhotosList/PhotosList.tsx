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
  next?: boolean
}

const PhotosList = ({ index, next }: Props) => {
  const { data, isLoading, isValidating, error } = usePhotos(index)
  const photos = isLoading ? null : data?.photo
  const oddRow = photos?.slice(0, 50)
  const evenRow = photos?.slice(50, 100)
  const [cnt, setCnt] = usePagesCountState()
  const [direction, setDirection] = useState<Direction>("")
  const [clicked, setClicked] = useState<boolean>(next || false)

  const loadNext = () => {
    setDirection("next")
    setCnt(cnt + 1)
    setClicked(true)
  }

  const loadPrevious = () => {
    setDirection("previous")
    setCnt(cnt - 1)
  }

  const loading = isLoading || isValidating

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const h = 40
  const pagesLimit = 600

  const variants = {
    "next": {
      y: h,
      opacity: 0
    },
    "previous": {
      y: -h,
      opacity: 0
    },
    "nextExit": {
      y: -h,
      opacity: 0
    },
    "previousExit": {
      y: h,
      opacity: 0
    },
  }

  return (
    <>
      {
        !isMobile
        && !loading && <motion.button
          initial={{ opacity: cnt == 1 ? 0 : 1, height: h }}
          animate={{ opacity: cnt == 1 ? 0 : 1, height: cnt == 1 ? 0 : h }}
          transition={{ delay: 0.5 }}
          className={`${styles.button} ${styles.previous}`} onClick={loadPrevious}>
          <ArrowUpIcon className='h-6' />
        </motion.button>
      }
      <motion.div
        initial={direction}
        animate={{ y: 0, opacity: 1 }}
        exit={`${direction}Exit`}
        transition={{ stiffness: 200 }}
        variants={variants}
        className={styles.container}
      >
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
        ((!isMobile && !loading && cnt < pagesLimit) || (isMobile && !loading && cnt < pagesLimit && !clicked)) && <motion.button
          initial={{ opacity: cnt == pagesLimit ? 0 : 1, height: h }}
          animate={{ opacity: cnt == pagesLimit ? 0 : 1, height: cnt == pagesLimit ? 0 : h }}
          className={`${styles.button} ${styles.next}`}
          onClick={loadNext}>
          <ArrowDownIcon className='h-6' />
        </motion.button>
      }
    </>
  )
}

export default PhotosList