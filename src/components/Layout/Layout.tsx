import Link from "next/link"
import styles from "./Layout.module.css"
import Header from "../Header/Header"
import { useRouter } from "next/router"

interface Props {
  children: React.ReactNode,
  home?: boolean,
  photoCard?: boolean
}

const Layout = ({ children, home, photoCard }: Props) => {
  const router = useRouter()
  const pid = router.query.id
  return (
    <div className={styles.container}>
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
    </div>
  )
}

export default Layout