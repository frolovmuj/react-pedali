import React from 'react'
import styles from './Drawer.module.scss'
import Button from '../ui/Button/ButtonGreen'
import CartItem from '../CartItem/CartItem'
import { CardModel } from '../../models/CardModel'

interface IDrawerProps {
    closeCart: () => void
    checkoutHistory: () => void
    cartItems: CardModel[]
    removeFromCart: (id: number) => void
    totalPrice: number
    tax: number
    cartIsCheckout: boolean
}
const Drawer: React.FC<IDrawerProps> = ({ cartIsCheckout, tax, checkoutHistory, totalPrice, closeCart, cartItems, removeFromCart }) => {

    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>

                {cartItems.length > 0 ?
                    <>
                        <h2 className={styles.drawer__title}>
                            <span>Корзина</span>
                            <img onClick={closeCart} src="./img/crossButton.svg" alt="Close basket" />
                        </h2>
                        <div className={styles.cards}>
                            {cartItems.map((cartItem) => <CartItem key={cartItem.id} removeFromCart={removeFromCart} cartItem={cartItem} />)}
                        </div>
                        <div className={styles.drawer__total}>
                            <ul className={styles.drawer__descritionList}>
                                <li className={styles.drawer__descritionItem}>
                                    <span>Цена:</span>
                                    <div className={styles.lineDot}></div>
                                    <b>{totalPrice.toLocaleString()} руб.</b>
                                </li>
                                <li className={styles.drawer__descritionItem}>
                                    <span>Налог 5%:</span>
                                    <div className={styles.lineDot}></div>
                                    <b>{tax.toLocaleString()} руб.</b>
                                </li>
                                <li className={styles.drawer__descritionItem}>
                                    <span>Итого:</span>
                                    <div className={styles.lineDot}></div>
                                    <b>{(totalPrice + tax).toLocaleString()} руб.</b>
                                </li>
                            </ul>
                            <Button checkoutHistory={checkoutHistory}> Оформить заказ </Button>
                        </div>
                    </>
                    : cartIsCheckout ?
                        <div className={styles.drawer_bought}>
                            <img src="./img/cartIsBought.jpg" alt="cartIsBought" />
                            <h2>
                                Заказ оформлен и будет доставлен в ближайшее время!
                            </h2>
                            <p>Ваш заказ был оформлен и наша компания доставит его в самое ближайшее время. Примерное время ожидания 3-12 дней</p>
                            <Button closeCart={closeCart}>Вернуться на главную</Button>
                        </div> :
                        <div className={styles.drawer_empty}>
                            <h2> Корзина Пуста</h2>
                            <img width={250} height={250} src="./img/box.jpg" alt="box" />
                            <h3 >Похоже что ваша корзина пуста :(</h3>
                            <Button closeCart={closeCart}> Выйти с корзины </Button>
                        </div>
                }
            </div>
        </div>
    )
}

export default Drawer