import React from 'react'
import styles from './Button.module.scss'
interface IButtonProps {
  children: React.ReactNode
  closeCart?: () => void
  checkoutHistory?: () => void
  className?: string
  addToCartOneCard?: () => void
}
const Button: React.FC<IButtonProps> = ({ addToCartOneCard, children, closeCart, checkoutHistory }) => {


  const test = () => {
    if (closeCart) {
      closeCart()
    } else if (checkoutHistory) {
      checkoutHistory()
    } else if (addToCartOneCard) {
      addToCartOneCard()
    }
  }

  return (
    <button onClick={test} className={styles.btn}>{children}</button>
  )
}

export default Button