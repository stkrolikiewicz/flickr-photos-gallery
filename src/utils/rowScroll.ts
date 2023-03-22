import { RefObject } from "react"

export const scrollLeft= (ref: RefObject<HTMLDivElement>) => {
  ref.current?.scrollTo({
    left: Math.max(ref.current?.scrollLeft - ref.current?.clientWidth, 0),
    behavior: 'smooth'
  })
}

export const scrollRight = (ref: RefObject<HTMLDivElement>) => {
  ref.current?.scrollTo({
    left: Math.min(ref.current?.scrollLeft + ref.current?.clientWidth, ref.current?.scrollWidth),
    behavior: 'smooth'
  })
}
