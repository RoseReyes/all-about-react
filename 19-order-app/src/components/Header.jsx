import { Button } from './ui/Button';
import { CartContext } from '../store/food-cart-context.jsx';
import foodAppImg from '../assets/logo.jpg';
import { useContext } from 'react';

export const Header = () => {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  return (
    <header id='main-header'>
      <div id='title'>
        <img
          src={foodAppImg}
          alt='Food App icon'></img>
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button
          className='cart'
          textOnly>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};
