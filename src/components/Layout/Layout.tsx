import Link from "next/link"
import styles from "./Layout.module.css"
import Header from "../Header/Header"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"

interface Props {
  children: React.ReactNode,
  home?: boolean,
  photoCard?: boolean
}

const Layout = ({ children, home, photoCard }: Props) => {
  const router = useRouter()
  const pid = router.query.id
  return (
    <motion.div className={styles.container} initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {home ? <Header home /> : <Header />}
      <main className={styles.main}>
        <div className={styles.children}>
          {children}
        </div>
        {!home && (
          <>
            {photoCard ? <Link href={`/#${pid}`}><ArrowLeftIcon className={styles.backHome} /></Link> : <Link href="/"><div className={styles.backHome}><ArrowLeftIcon className={styles.backHome} /></div></Link>}
          </>
        )}
      </main>
    </motion.div>
  )
}

export default Layout