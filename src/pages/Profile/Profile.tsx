import React from 'react'
import { CardModel } from '../../models/CardModel'
import styles from './Profile.module.scss'
import BlankCard from '../../components/BlankCard/BlankCard'
import { Link } from 'react-router-dom'
import Title from '../../components/ui/Title/Title'
import Button from '../../components/ui/Button/ButtonGreen'

interface IProfileProps {
    sentCards: CardModel[]
}

const Profile: React.FC<IProfileProps> = ({ sentCards }) => {
    return (
        <section className={styles.content}>
            <div className={styles.content__heading}>
                <Link to='/'>
                    <img src="/img/back.svg" alt="back" />
                </Link>
                <Title>Архив покупок</Title>
            </div>
            <div className={styles.cards}>
                {sentCards.length > 0 ? sentCards.map((card, i) => {
                    return <BlankCard
                        key={card.id + i + card.price}
                        sentCard={card} />
                }) :
                    <div className={styles.content_empty}>
                        <h1 className={styles.content_empty__title}>Оформите хотя бы один заказ, чтобы посмотреть историю покупок</h1>
                        <Link to='/'>
                            <Button>Вернутсья к покупкам</Button>
                        </Link>
                    </div>}

            </div>
        </section>
    )
}

export default Profile