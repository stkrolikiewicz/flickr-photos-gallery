import styles from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.dot} animate-ping`}></div>
      <div className={`${styles.dot} animate-ping animation-delay-300`}></div>
      <div className={`${styles.dot} animate-ping animation-delay-600`}></div>
    </div>
  )
}

export default Loader