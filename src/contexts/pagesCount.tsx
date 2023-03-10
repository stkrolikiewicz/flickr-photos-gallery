import React, { useState, createContext, PropsWithChildren } from "react"

export const PagesCountContext = createContext<number>(0)
export const SetPagesCountContext = createContext<React.Dispatch<React.SetStateAction<number>>>(useState)

export const PagesCountProvider = (props: PropsWithChildren) => {
  const [cnt, setCnt] = useState(1)

  return (
    <PagesCountContext.Provider value={cnt}>
      <SetPagesCountContext.Provider value={setCnt}>
        {props.children}
      </SetPagesCountContext.Provider>
    </PagesCountContext.Provider>
  )
}