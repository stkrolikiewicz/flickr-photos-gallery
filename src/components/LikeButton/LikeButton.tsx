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

  const favIds: string[] = favourites.map(el => el.id)

  const manageFavourites = (photo: Photo) => {
    favIds.includes(photo.id) && console.log(favIds.indexOf(photo.id))
    const arr = favIds.includes(photo.id) ? arrayRemove(favourites, favourites[favIds.indexOf(photo.id)]) : favourites.concat(photo)
    setFavourites(arr)
  }

  return (
    <div>
      <HeartIcon role="button" onClick={() => manageFavourites(photo)} className={clsx(styles.heartDefault, favIds.includes(photo.id) ? styles.heartFav : styles.heartNotFav)} />
    </div>
  )
}

export default LikeButton