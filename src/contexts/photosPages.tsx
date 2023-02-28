import React, { useState, createContext, PropsWithChildren } from "react"
import PhotosList from "~/components/PhotosList"

const initialPages: Array<JSX.Element> = [<PhotosList index={1} key={1} />]
export const PhotosPagesContext = createContext(initialPages)
export const PhotosPagesCountContext = createContext<React.Dispatch<React.SetStateAction<number>> | null>(null)

export const PhotosPagesProvider = (props: PropsWithChildren) => {
  const [cnt, setCnt] = useState(2)

  const pages = []

  for (let i = 1; i < cnt; i++) {
    pages.push(<PhotosList index={i + 1} key={i + 1} />)
  }

  return (
    <PhotosPagesContext.Provider value={pages}>
      <PhotosPagesCountContext.Provider value={setCnt}>
        {props.children}
      </PhotosPagesCountContext.Provider>
    </PhotosPagesContext.Provider>
  )
}