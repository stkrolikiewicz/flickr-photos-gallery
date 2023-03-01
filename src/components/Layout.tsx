import Link from "next/link"
import styles from "./Layout.module.css"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
const Layout = ({ children, home }: { children: React.ReactNode, home?: boolean }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.children}>
          {children}
        </div>
        {!home && (
          <div className={styles.backHome}>
            <Link href="/">← back home</Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Layout