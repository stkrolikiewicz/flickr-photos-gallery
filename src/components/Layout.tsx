import Link from "next/link"
import styles from "./Layout.module.css"

const Layout = ({ children, home }: { children: React.ReactNode, home?: boolean }) => {
  return (
    <div className={styles.container}>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}

export default Layout