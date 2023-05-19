import React from 'react'
import './ItemPage.scss'
import { useParams } from 'react-router-dom'
import { CardModel } from '../../models/CardModel'
import { SneakersService } from '../../services/sneakers.service'
import Button from '../../components/ui/Button/ButtonGreen'
import PreloadItemPage from '../../components/PreloadItemPage/PreloadItemPage'


interface IItemPageProps {
    addToCart: (id: number) => void
    removeFromCart: (id: number) => void
    cartItems: CardModel[]
}

const ItemPage: React.FC<IItemPageProps> = ({ cartItems, removeFromCart, addToCart }) => {
    const { id } = useParams()
    const [card, setCard] = React.useState<CardModel[]>([])

    React.useEffect(() => {
        const fetchData = async () => {
            const data: CardModel[] = await SneakersService.getOne(id);
            if (cartItems.some(cartItem => cartItem.id === Number(id))) {
                setCard(
                    data.map(item =>
                        item.id === Number(id)
                            ? { ...item, inCart: true }
                            : item
                    )
                )
            } else {
                setCard(data)
            }
        };
        fetchData();
    }, []);

    React.useEffect(() => {
        setCard(prevState => prevState.map(item =>
            item.id === Number(id) ? { ...item, inCart: cartItems.some(cartItem => cartItem.id === Number(id)) } : item
        ));
    }, [cartItems, id]);

    const addToCartOneCard = () => {
        const [{ inCart }] = card;
        if (!inCart) {
            addToCart(Number(id));
        } else {
            removeFromCart(Number(id));
        }
        setCard(prev =>
            prev.map(item => item.id === Number(id) ? { ...item, inCart: !inCart } : item)
        );
    };

    return (
        <>
            {Object.keys(card).length !== 0 ?



                <div className='content'>
                    <div className="left-column"><img src={card[0]?.imgUrl} alt="card" data-image="black" /></div>
                    <pre> {"\n"}{"  "}{"\n"}{"  "}
                        {/* Right Column */}
                    </pre>
                    <div className="right-column">{/* Product Description */}
                        <div className="product-description">Кроссовки
                            <h1>{card[0]?.title}</h1>
                            <p>he preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
                        </div>
                        {/* Product Configuration */}
                        <div className="product-configuration">
                        </div>
                        {/* Product Pricing */}
                        <div className="product-price"><span>{card[0]?.price.toLocaleString()} руб.</span>
                            <Button addToCartOneCard={addToCartOneCard}>{card[0].inCart ? 'Удалить с корзины' : 'Добавить в корзину'}</Button>
                        </div>
                    </div>
                    <pre />
                </div>


                : <PreloadItemPage />}
        </>
    )
}

export default ItemPage