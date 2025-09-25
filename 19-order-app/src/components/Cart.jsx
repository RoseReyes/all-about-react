import { Button } from './ui/Button.jsx';
import { CartContext } from '../store/FoodCartContext.jsx';
import { CartItem } from './CartItem.jsx';
import { Modal } from './ui/Modal.jsx';
import { UserProgressContext } from '../store/UserProgressContext.jsx';
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
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItemToCart(item)}
            onDecrease={() => cartCtx.removeItemToCart(item.id)}
          />
        ))}
      </ul>
      <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
      <p className='modal-actions'>
        <Button
          textOnly
          onClick={handleCloseCart}>
          Close
        </Button>
        <Button onClick={handleCloseCart}>Go to checkout</Button>
      </p>
    </Modal>
  );
};
