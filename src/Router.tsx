// Router.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CardModel } from './models/CardModel';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import Favourited from './pages/Favourited/Favourited';
import Home from './pages/Home/Home';
import ItemPage from './pages/ItemPage/ItemPage';
import Profile from './pages/Profile/Profile';

interface RouterProps {
  cartIsOpen: boolean;
  cartIsCheckout: boolean;
  checkoutHistory: () => void;
  tax: number;
  totalPrice: number;
  removeFromCart: (id: number) => void;
  cartItems: CardModel[];
  closeCart: () => void;
  openCart: () => void;
  cards: CardModel[];
  addToFavorites: (id: number) => void;
  deleteFromFavorites: (id: number) => void;
  addToCart: (id: number) => void
  sentCards: CardModel[]
  favoritesCards: CardModel[];
}

const Router: React.FC<RouterProps> = ({ addToCart, cartIsOpen, cartIsCheckout, checkoutHistory, tax, totalPrice, removeFromCart, cartItems, closeCart, openCart, cards, addToFavorites, deleteFromFavorites, sentCards, favoritesCards }) => {

  return (
    <BrowserRouter>
      {cartIsOpen ? <Drawer cartIsCheckout={cartIsCheckout} checkoutHistory={checkoutHistory} tax={tax} totalPrice={totalPrice} removeFromCart={removeFromCart} cartItems={cartItems} closeCart={closeCart} /> : null}
      <Header tax={tax} totalPrice={totalPrice} openCart={openCart} />
      <Routes>
        <Route path="/" element={<Home
          cards={cards}
          cartItems={cartItems}
          addToFavorites={addToFavorites}
          deleteFromFavorites={deleteFromFavorites}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />} />
        <Route path="/favourited" element={<Favourited
          cartItems={cartItems}
          addToFavorites={addToFavorites}
          deleteFromFavorites={deleteFromFavorites}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          favoritesCards={favoritesCards} />} />
        <Route path="/profile" element={<Profile sentCards={sentCards} />} />
        <Route path="/card/:id" element={<ItemPage cartItems={cartItems} removeFromCart={removeFromCart} addToCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;