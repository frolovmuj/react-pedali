import React from 'react'
import styles from './CartItem.module.scss'
import { CardModel } from '../../models/CardModel'

interface ICartItemProps {
    cartItem: CardModel
    removeFromCart: (id: number) => void
}

const CartItem: React.FC<ICartItemProps> = ({ cartItem, removeFromCart }) => {
    
    return (
        <div className={styles.card}>
            <img className={styles.card__img} width={70} height={70} src={cartItem.imgUrl} alt="sheakers" />
            <div className={styles.card__description}>
                <p>{cartItem.title}</p>
                <b>{cartItem.price.toLocaleString()} руб.</b>
            </div>
            <button onClick={() =>removeFromCart(cartItem.id)} className={styles.card__buttonIntoToBusket}>
                <img src="/img/crossButton.svg" alt="remove" />
            </button>
        </div>
    )
}

export default CartItem