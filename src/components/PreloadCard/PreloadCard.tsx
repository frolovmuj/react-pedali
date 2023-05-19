import styles from './PreloadCard.module.scss'
const PreloadCard = () => {
  return (
    <div className={styles.card}>
            <button className={styles.card__favorite}>
            <div>
            </div>
            </button>
            <div className={styles.card__img}>
            </div>
            <div className={styles.card__titles}>
            <p className={styles.card__title}></p>
            <p className={styles.card__title}></p>
            <p className={styles.card__title}></p>
            </div>
        </div>
  )
}

export default PreloadCard