import { Button } from './ui/Button';
import { CartContext } from '../store/food-cart-context.jsx';
import foodAppImg from '../assets/logo.jpg';
import { useContext } from 'react';

export const Header = () => {
  const cartCtx = useContext(CartContext);
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
          Cart ({cartCtx.items.length > 0 ? cartCtx.items.length : 0})
        </Button>
      </nav>
    </header>
  );
};
