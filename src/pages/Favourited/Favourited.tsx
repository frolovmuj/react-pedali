import React from 'react'
import { CardModel } from '../../models/CardModel'
import styles from './Favourited.module.scss'
import Card from '../../components/Card/Card'
import { ICardProps } from './../../components/Card/Card'
import Title from '../../components/ui/Title/Title'
import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button/ButtonGreen'

interface IFavoritedProps extends Omit<ICardProps, 'card'> {
  favoritesCards: CardModel[]
}

const Favourited: React.FC<IFavoritedProps> = ({ cartItems, addToFavorites, deleteFromFavorites, removeFromCart, addToCart, favoritesCards }) => {
  return (
    <>
      <section className={styles.content}>
        <div className={styles.content__heading}>
          <Link to='/react-pedali'>
            <img src="./img/back.svg" alt="back" />
          </Link>
          <Title>Оценённые</Title>
        </div>
        <div className={styles.cards}>
          {favoritesCards.length > 0 ? favoritesCards.map(favoritesCard =>
            <Card
              cartItems={cartItems}
              addToFavorites={addToFavorites}
              deleteFromFavorites={deleteFromFavorites}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
              key={favoritesCard.id}
              card={favoritesCard}
            />
          ) : <div className={styles.content_empty}>
            <h1 className={styles.content_empty__title}>Оцените хоть одну пару кроссовок, чтобы увидеть их здесь</h1>
            <Link to='/react-pedali'>
              <Button>Вернутсья на главную</Button>
            </Link>
          </div>}
        </div>
      </section>
    </>
  )
}

export default Favourited