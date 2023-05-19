import React from "react"
import styles from './Card.module.scss'
import { CardModel } from "../../models/CardModel"
import { useNavigate } from "react-router-dom"

export interface ICardProps {
    card: CardModel
    addToCart: (id: number) => void
    addToFavorites: (id: number) => void
    deleteFromFavorites: (id: number) => void
    removeFromCart: (id: number) => void
    cartItems: CardModel[]
}

const Card: React.FC<ICardProps> = ({ deleteFromFavorites, card, addToCart, removeFromCart, addToFavorites }) => {

    const navigate = useNavigate()
    const uniteToCart = () => {
        if (!card.inCart) {
            addToCart(card.id)
        } else {
            removeFromCart(card.id)
        }
    }

    const uniteToFavorites = () => {
        if (!card.favourite) {
            addToFavorites(card.id)
        } else {
            deleteFromFavorites(card.id)
        }
    }

    const navigateToProduct = (id: number) => navigate(`/card/${id}`)

    return (
        <div className={styles.card}>
            <button className={styles.card__favorite}>
                <img onClick={uniteToFavorites} src={card.favourite ? "./img/liked.svg" : "./img/unliked.svg"} alt="liked" />
            </button>

            <img onClick={() => navigateToProduct(card.id)} className={styles.card__img} width={133} height={112} src={card.imgUrl} alt="sneakers" />

            <p className={styles.card__title}>{card.title}</p>
            <div className={styles.card__flex}>
                <div className={styles.card__price}>
                    <span>Цена:</span>
                    <b>{card.price.toLocaleString()} руб.</b>
                </div>
                <button onClick={() => {
                    uniteToCart()
                }} className={styles.card__buttonToBasket}>
                    <img src={card.inCart ? "./img/addedToCart.svg" : "/.img/plusButton.svg"} alt="добавить в корзину" />
                </button>
            </div>
        </div>
    )
}

export default Card