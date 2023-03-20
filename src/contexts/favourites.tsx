import React, { useState, createContext, PropsWithChildren } from "react"
import { useLocalStorage } from "~/hooks/useLocaleStorage"
import { Photo } from "~/types"

export const FavouritesPhotosContext = createContext<Photo[]>([])
export const SetFavouritesContext = createContext<React.Dispatch<React.SetStateAction<Photo[]>>>(useState)

export const FavouritesPhotosProvider = (props: PropsWithChildren) => {
  const [favourites, setFavourites] = useLocalStorage<Photo[]>("favourites", [])
  return (
    <FavouritesPhotosContext.Provider value={favourites}>
      <SetFavouritesContext.Provider value={setFavourites}>
        {props.children}
      </SetFavouritesContext.Provider>
    </FavouritesPhotosContext.Provider>
  )
}

