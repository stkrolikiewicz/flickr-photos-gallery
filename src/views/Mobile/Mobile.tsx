import { PhotosColumn } from "~/components"
import { Photo } from "~/types"

interface Props {
  photos: Photo[],
}

const Mobile = ({ photos }: Props) => {
  return (
    <PhotosColumn photos={photos} />
  )
}

export default Mobile