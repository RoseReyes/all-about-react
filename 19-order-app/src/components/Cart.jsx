import CartContext from '../store/cart-context.js';
import Modal from './UI/Modal.jsx';
import { useContext } from 'react';

const Cart = () => {
  const cartCtx = useContext(CartContext);
  return (
    <Modal className='cart'>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.amount}
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default Cart;
