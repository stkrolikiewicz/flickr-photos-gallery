import { HeartIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import { useContext } from "react"
import { FavouritesPhotosContext, SetFavouritesContext } from "~/contexts/favourites"
import { Photo } from "~/types"
import { arrayRemove } from "~/utils/arrayMethods"
import styles from "./LikeButton.module.css"

interface Props {
  photo: Photo
  photosRow?: boolean
}

const LikeButton = ({ photo, photosRow }: Props) => {
  const favourites = useContext(FavouritesPhotosContext)
  const setFavourites = useContext(SetFavouritesContext)

  const favIds: string[] = favourites.map(el => el.id)

  const manageFavourites = (photo: Photo) => {
    const arr = favIds.includes(photo.id) ? arrayRemove(favourites, favourites[favIds.indexOf(photo.id)]) : favourites.concat(photo)
    setFavourites(arr)
  }

  return (
    <div>
      <HeartIcon role="button" onClick={() => manageFavourites(photo)} className={clsx(styles.heartDefault, photosRow && styles.photosRow, favIds.includes(photo.id) ? styles.heartFav : styles.heartNotFav)} />
    </div>
  )
}

export default LikeButton