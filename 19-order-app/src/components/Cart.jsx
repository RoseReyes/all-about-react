import { Button } from './ui/Button.jsx';
import { CartContext } from '../store/food-cart-context';
import Modal from './ui/Modal.jsx';
import { currencyFormatter } from '';
import { useContext } from 'react';

export const Cart = () => {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  return (
    <Modal classname='cart'>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className='cart-total'>{currencyFormatter(cartTotal)}</p>
      <p className='modal-actions'>
        <Button textOnly>Close</Button>
        <Button textOnly>Got to checkout</Button>
      </p>
    </Modal>
  );
};
