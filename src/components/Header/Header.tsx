import { HeartIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import styles from "./Header.module.css"

interface Props {
  home?: boolean
  favourite?: boolean
}

const Header = ({ home, favourite }: Props) => {
  return (<>
    <header className={styles.header}>
      <h1 className="font-semibold"><i className="font-thin">f&apos;s</i>pg</h1>
      {
        !favourite ? <Link href={"/favourites"} className="flex text-gray gap-2 items-center border-b border-b-transparent transition underline-offset-4 hover:border-b-gray "><h4>favourites</h4><HeartIcon className="h-5 transition hover:fill-gray" /></Link>
          : <div className="flex items-center gap-2 border-b text-light"><h4>favourites</h4><HeartIcon className="h-5 fill-light" /></div>
      }
    </header>
    {(home || favourite) && <div className={styles.vanishBar}></div>}
  </>
  )
}

export default Header