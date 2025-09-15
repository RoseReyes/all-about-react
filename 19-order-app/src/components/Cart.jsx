import { Button } from './ui/Button.jsx';
import { CartContext } from '../store/food-cart-context';
import { Modal } from './ui/Modal.jsx';
import { UserProgressContext } from '../store/user-progress-context.jsx';
import { currencyFormatter } from '../util/formatting.js';
import { useContext } from 'react';

export const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const handleCloseCart = () => {
    userProgressCtx.hideCart();
  };
  return (
    <Modal
      classname='cart'
      open={userProgressCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
      <p className='modal-actions'>
        <Button
          textOnly
          onClick={handleCloseCart}>
          Close
        </Button>
        <Button onClick={handleCloseCart}>Got to checkout</Button>
      </p>
    </Modal>
  );
};
