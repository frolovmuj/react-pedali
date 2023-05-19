import React from 'react'
import { CardModel } from '../../models/CardModel';
import Card from '../../components/Card/Card';
import PreloadCards from '../../components/PreloadCards/PreloadCards';
import styles from './Home.module.scss'
import Title from '../../components/ui/Title/Title';
interface IHomeProps {
    cards: CardModel[]
    cartItems: CardModel[]
    addToCart: (id: number) => void
    addToFavorites: (id: number) => void
    deleteFromFavorites: (id: number) => void
    removeFromCart: (id: number) => void
}

const Home: React.FC<IHomeProps> = ({ deleteFromFavorites, addToCart, removeFromCart, addToFavorites, cartItems, cards }) => {

    const [searchValue, setSearchValue] = React.useState('')

    // Ищем карточки
    const searchCards = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)

    // Очищаем поиск
    const setSearchValueHandler = () => setSearchValue('')

    return (
        <section className={styles.content}>
            <div className={styles.content__heading}>
                <Title>{searchValue.length > 0 ? `Поиск по товару: "${searchValue}"` : 'Все товары'}</Title>
                <div className={styles.seacrh}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <input value={searchValue} onChange={searchCards} placeholder="Поиск..." type="text" />
                    {searchValue.length > 0 && <img onClick={setSearchValueHandler} width={40} height={40} src="/img/crossButton.svg" alt="remove" />}
                </div>
            </div>
            <div className={styles.cards}>
                {cards.length > 0 ? cards.filter(card => card.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())).map((card) => {
                    return <Card
                        cartItems={cartItems}
                        addToFavorites={addToFavorites}
                        deleteFromFavorites={deleteFromFavorites}
                        removeFromCart={removeFromCart}
                        addToCart={addToCart}
                        key={card.id}
                        card={card} />
                }) : <PreloadCards />}

            </div>
        </section>
    )
}

export default Home