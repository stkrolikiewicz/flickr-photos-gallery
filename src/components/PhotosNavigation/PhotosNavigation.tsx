import { motion } from "framer-motion"
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid"
import styles from "./PhotosNavigation.module.css"
import { ReactNode } from "react"
import { Direction } from "~/types"

interface PreviousButtonProps {
  cnt: number,
  onClick: () => void
}

interface NextButtonProps {
  cnt: number,
  onClick: () => void
}

interface MotionWrapperProps {
  children: ReactNode,
  direction: Direction
}

const h = 40
const pagesLimit = 600
const variants = {
  "next": {
    y: h,
    opacity: 0
  },
  "previous": {
    y: -h,
    opacity: 0
  },
  "nextExit": {
    y: -h,
    opacity: 0
  },
  "previousExit": {
    y: h,
    opacity: 0
  },
}

export const PreviousButton = ({ cnt, onClick }: PreviousButtonProps) => {
  return (
    cnt < pagesLimit ?
      <motion.button
        initial={{ opacity: cnt == 1 ? 0 : 1, height: h }}
        animate={{ opacity: cnt == 1 ? 0 : 1, height: cnt == 1 ? 0 : h }}
        transition={{ delay: 0.5 }}
        className={`${styles.button} ${styles.previous}`} onClick={onClick}>
        <ArrowUpIcon className='h-6' />
      </motion.button>
      : <></>
  )
}

export const NextButton = ({ cnt, onClick }: NextButtonProps) => {
  return (
    cnt < pagesLimit ?
      <motion.button
        initial={{ opacity: cnt == pagesLimit ? 0 : 1, height: h }}
        animate={{ opacity: cnt == pagesLimit ? 0 : 1, height: cnt == pagesLimit ? 0 : h }}
        className={`${styles.button} ${styles.next}`}
        onClick={onClick}>
        <ArrowDownIcon className='h-6' />
      </motion.button>
      : <></>
  )
}

export const MotionWrapper = ({ children, direction }: MotionWrapperProps) => {
  return (
    <motion.div
      initial={direction}
      animate={{ y: 0, opacity: 1 }}
      exit={`${direction}Exit`}
      transition={{ stiffness: 200 }}
      variants={variants}
      className={styles.container}
    >
      {children}
    </motion.div>
  )
}
