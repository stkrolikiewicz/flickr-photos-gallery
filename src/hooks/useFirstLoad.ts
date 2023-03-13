import { useContext } from "react";
import { FirstLoadContext, SetFirstLoadContext } from "~/contexts/firstLoad";

export const useFirstLoad = () => {
  const firstLoad = useContext(FirstLoadContext)
  const setFirstLoad = useContext(SetFirstLoadContext)

  return [firstLoad, setFirstLoad] as const
}