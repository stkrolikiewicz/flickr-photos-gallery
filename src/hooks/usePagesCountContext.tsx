import { useContext } from "react";
import { PagesCountContext, SetPagesCountContext } from "~/contexts/pagesCount";

export const usePagesCountState = () => {
  const cnt = useContext(PagesCountContext)
  const setCnt = useContext(SetPagesCountContext)

  return [cnt, setCnt] as const
}