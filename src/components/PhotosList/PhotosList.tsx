import { useState } from "react"
import usePhotos from "~/hooks/usePhotos"
import Loader from "../Loader/Loader"
import { useMediaQuery } from "react-responsive"
import { Direction } from "~/types"
import { usePagesCountState } from "~/hooks/usePagesCountContext"
import styles from "./PhotosList.module.css"
import { MotionWrapper, NextButton, PreviousButton } from "~/components"
import { Mobile, Desktop } from "~/views"

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

  return (
    isMobile ?
      <>
        <MotionWrapper direction={direction}>
          {
            loading ? <Loader />
              : photos &&
              <Mobile photos={photos} />
          }
          {error && <h2>Error: {error.message}</h2>}
        </MotionWrapper>
        {
          !loading && !clicked && <NextButton cnt={cnt} onClick={loadNext} />
        }
      </>

      : // !isMobile - Desktop

      <>
        {
          !loading && <PreviousButton cnt={cnt} onClick={loadPrevious} />
        }
        <MotionWrapper direction={direction}>
          {
            loading ? <Loader />
              : oddRow && evenRow &&
              <Desktop oddRow={oddRow} evenRow={evenRow} />
          }
          {error && <h2>Error: {error.message}</h2>}
        </MotionWrapper>
        {
          !loading &&
          <NextButton cnt={cnt} onClick={loadNext} />
        }
      </>
  )
}

export default PhotosList