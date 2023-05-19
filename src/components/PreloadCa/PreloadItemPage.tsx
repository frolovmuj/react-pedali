import styles from './PreloadItem.module.scss'
const PreloadItemPage = () => {
    return (
        <div className={styles.content}>
            <div className={styles.leftColumn}><div className={styles.img}></div></div>
            <div className={styles.rightColumn}>{/* Product Description */}
                <div className={styles.productDescription}>
                    <h1></h1>
                    <p></p>
                </div>
                {/* Product Pricing */}
                <div className={styles.productPrice}>
                    <div className={styles.productPrice__text}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                    <span className={styles.productPrice__price}></span>
                    <button></button>
                </div>
            </div>
            <pre />
        </div>

    )
}

export default PreloadItemPage