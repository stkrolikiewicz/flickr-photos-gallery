import React, { useState, createContext, PropsWithChildren } from "react"

export const FirstLoadContext = createContext<boolean>(false)
export const SetFirstLoadContext = createContext<React.Dispatch<React.SetStateAction<boolean>>>(useState)

export const FirstLoadProvider = (props: PropsWithChildren) => {
  const [firstLoad, setFirstLoad] = useState(true)

  return (
    <FirstLoadContext.Provider value={firstLoad}>
      <SetFirstLoadContext.Provider value={setFirstLoad}>
        {props.children}
      </SetFirstLoadContext.Provider>
    </FirstLoadContext.Provider>
  )
}