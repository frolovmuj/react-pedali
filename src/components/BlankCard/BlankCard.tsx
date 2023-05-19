import React from 'react'
import { CardModel } from '../../models/CardModel'
import styles from './BlankCard.module.scss'
interface IBlankCard {
    sentCard: CardModel
}


const BlankCard: React.FC<IBlankCard> = ({ sentCard }) => {
    return (
        <div className={styles.card}>
            <img className={styles.card__img} width={133} height={112} src={sentCard.imgUrl} alt="sneakers" />
            <p className={styles.card__title}>{sentCard.title}</p>
            <div className={styles.card__flex}>
                <div className={styles.card__price}>
                    <span>Цена:</span>
                    <b>{sentCard.price.toLocaleString()} руб.</b>
                </div>
            </div>
        </div>
    )
}

export default BlankCard