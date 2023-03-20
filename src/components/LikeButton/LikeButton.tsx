import { HeartIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import { useContext } from "react"
import { FavouritesPhotosContext, SetFavouritesContext } from "~/contexts/favourites"
import { Photo } from "~/types"
import { arrayRemove } from "~/utils/arrayMethods"
import styles from "./LikeButton.module.css"

interface Props {
  photo: Photo
}

const LikeButton = ({ photo }: Props) => {
  const favourites = useContext(FavouritesPhotosContext)
  const setFavourites = useContext(SetFavouritesContext)

  const manageFavourites = (photo: Photo) => {
    const arr = favourites.includes(photo) ? arrayRemove(favourites, photo) : favourites.concat(photo)
    setFavourites(arr)
  }

  return (
    <div>
      <HeartIcon role="button" onClick={() => manageFavourites(photo)} className={clsx(styles.heartDefault, favourites.includes(photo) ? styles.heartFav : styles.heartNotFav)} />
    </div>
  )
}

export default LikeButton