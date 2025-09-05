import { Button } from './ui/Button.jsx';
import { CartContext } from '../store/food-cart-context.jsx';
import { currencyFormatter } from '../util/formatting.js';
import { useContext } from 'react';

export const MealItem = ({ meal }) => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <li className='meal-item'>
      <article>
        <img
          src={`http://localhost:3000/${meal.image}`}
          alt={meal.name}
        />
        <div>
          <h3>{meal.name}</h3>
          <p className='meal-item-price'>
            {currencyFormatter.format(meal.price)}
          </p>
          <p className='meal-item-description'>{meal.description}</p>
        </div>
        <p className='meal-item-actions'>
          <Button onClick={() => addItemToCart(meal.id)}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};
