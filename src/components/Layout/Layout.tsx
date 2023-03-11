import Link from "next/link"
import styles from "./Layout.module.css"
import Header from "../Header/Header"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

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
          <div className={styles.backHome}>
            {photoCard ? <Link href={`/#${pid}`}>← back home</Link> : <Link href="/">← back home</Link>}
          </div>
        )}
      </main>
    </motion.div>
  )
}

export default Layout