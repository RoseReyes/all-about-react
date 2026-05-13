import Button from './UI/Button';
import CartContext from './store/CartContext';
import logoImg from '../assets/logo.jpg';
import { useContext } from 'react';

const Header = () => {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce(
    (totalNumberOfItems, item) => totalNumberOfItems + item.quantity,
    0,
  );

  return (
    <header id='main-header'>
      <div id='title'>
        <img
          src={logoImg}
          alt='food logo'
        />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
