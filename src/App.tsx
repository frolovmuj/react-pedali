import React from 'react'
import { SneakersService } from './services/sneakers.service'
import { CardModel } from './models/CardModel'
import Router from './Router'
const App: React.FC = () => {

  const [cartIsOpen, setCartIsOpen] = React.useState<boolean>(false)
  const [cartIsCheckout, setCartIsCheckout] = React.useState<boolean>(false)
  const [cards, setCards] = React.useState<CardModel[]>([])
  const [cartItems, setCartItems] = React.useState<CardModel[]>([])
  const [sentCards, setSentCards] = React.useState<CardModel[]>([])
  const [favoritesCards, setFavoritesCards] = React.useState<CardModel[]>([])
  const [totalPrice, setTotalPrice] = React.useState<number>(0)
  const [tax, setTax] = React.useState<number>(5)

  // Высвечиваем о том, что товар куплен
  const cartIsBought = React.useCallback(() => setCartIsCheckout(true), [cartIsCheckout])

  // Убираем информацию о том, что заказ куплен
  const cartIsNotBought = React.useCallback(() => setCartIsCheckout(false), [cartIsCheckout])

  //Получаем все карточки
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await SneakersService.getAll();
      setCards(data);
    };
    fetchData();
  }, []);

  // При открытии корзины запрещяем скролл
  React.useLayoutEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (cartIsOpen) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [cartIsOpen]);

  // Открываем корзину
  const openCart = () => setCartIsOpen(true)

  // Закрываем корзину
  const closeCart = () => setCartIsOpen(false)


  // Добавляем в корзину
  const addToCart = (id: number) => {
    setCards(prevState =>
      prevState.map(item => item.id === id ? { ...item, inCart: true } : item)
    )

    setFavoritesCards(prevState =>
      prevState.map(item => item.id === id ? { ...item, inCart: true } : item)
    )

    const card = cards.filter(cart => cart.id === id)
    setCartItems(prev => [card[0], ...prev])
  }


  // Удаляем из корзины
  const removeFromCart = (id: number) => {

    setCards(prevState =>
      prevState.map(item => item.id === id ? { ...item, inCart: false } : item)
    )

    setFavoritesCards(prevState =>
      prevState.map(item => item.id === id ? { ...item, inCart: false } : item)
    )

    setCartItems(prev => prev.filter(card => card.id !== id))
    cartIsNotBought()
  }


  // Добавляем в любимые
  const addToFavorites = (id: number) => {
    setCards(prevState => prevState.map(item => item.id === id ? { ...item, favourite: true } : item)
    )
    const card = cards.find(card => card.id === id);
    const cardEdited = card ? { ...card, favourite: true } : undefined;
    setFavoritesCards(prev => cardEdited ? [...prev, cardEdited] : prev);
  }


  // Удаляем из любимых
  const deleteFromFavorites = (id: number) => {
    setCards(prevState =>
      prevState.map(item => item.id === id ? { ...item, favourite: false } : item)
    )

    setFavoritesCards(prevState =>
      prevState.map(item => item.id === id ? { ...item, favourite: false } : item)
    )

    setFavoritesCards(prevState => prevState.filter(card => card.id !== id))
  }


  // Тотал прайс
  React.useEffect(() => {
    const totalPrice = cartItems.reduce((acc, curr) => { return acc + curr.price; }, 0);
    setTotalPrice(totalPrice)

  }, [cartItems.length])


  // Налог
  React.useEffect(() => {
    const newTax: number = totalPrice * 0.05
    setTax(newTax)
  }, [totalPrice, cartItems])


  // Оформляем заказ
  const checkoutHistory = () => {
    const idCards = cartItems.map(item => item.id)

    setCards(prevState =>
      prevState.map(item => idCards.includes(item.id) ? { ...item, inCart: false } : item)
    )

    setFavoritesCards(prevState =>
      prevState.map(item => idCards.includes(item.id) ? { ...item, inCart: false } : item)
    )

    setCartItems([])
    setSentCards(prev => [...prev, ...cartItems])
    cartIsBought()
  }

  return (
    <div className="wrapper">
      <Router
        cartIsOpen={cartIsOpen}
        cartIsCheckout={cartIsCheckout}
        checkoutHistory={checkoutHistory}
        tax={tax}
        totalPrice={totalPrice}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
        closeCart={closeCart}
        openCart={openCart}
        cards={cards}
        addToFavorites={addToFavorites}
        deleteFromFavorites={deleteFromFavorites}
        sentCards={sentCards}
        favoritesCards={favoritesCards}
        addToCart={addToCart}
      />
    </div>
  )
}
export default App
