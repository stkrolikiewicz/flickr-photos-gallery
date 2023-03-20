import Link from "next/link"
import styles from "./Header.module.css"
import { HeartIcon } from "@heroicons/react/24/outline"

interface Props {
  home?: boolean
  favourite?: boolean
}

const Header = ({ home, favourite }: Props) => {
  return (<>
    <header className={styles.header}>
      <h1 className="font-semibold"><i className="font-thin">f&apos;s</i>pg</h1>
      {
        !favourite ? <Link href={"/favourites"} className="flex gap-2 items-center underline-offset-4 hover:underline"><h3>favourites</h3><HeartIcon className="h-8 hover:fill-light" /></Link>
          : <div className="flex items-center gap-2"><h3 className="underline underline-offset-4">favourites</h3><HeartIcon className="h-8 fill-light" /></div>
      }
    </header>
    {home && <div className={styles.vanishBar}></div>}
  </>
  )
}

export default Header