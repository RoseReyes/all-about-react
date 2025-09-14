import { useContext, useRef } from 'react';

import { Button } from './ui/Button';
import { CartContext } from '../store/food-cart-context.jsx';
import { UserProgressContext } from '../store/user-progress-context.jsx';
import foodAppImg from '../assets/logo.jpg';

export const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  const handleShowCart = () => {
    userProgressCtx.showCart();
  };
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
          textOnly
          onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};
