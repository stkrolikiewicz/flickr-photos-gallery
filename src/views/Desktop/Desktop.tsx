import { PhotosRow } from "~/components"
import { Photo } from "~/types"

interface Props {
  oddRow: Photo[],
  evenRow: Photo[],
}

const Desktop = ({ oddRow, evenRow }: Props) => {
  return (
    <>
      <PhotosRow photos={oddRow} odd />
      <PhotosRow photos={evenRow} />
    </>
  )
}

export default Desktop