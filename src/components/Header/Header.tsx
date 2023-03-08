import styles from "./Header.module.css"

interface Props {
  home?: boolean
}

const Header = ({ home }: Props) => {
  return (<>
    <header className={styles.header}>
      <h1 className="font-semibold"><i className="font-thin">f&apos;s</i>pg</h1>
    </header>
    {home && <div className={styles.vanishBar}></div>}
  </>
  )
}

export default Header