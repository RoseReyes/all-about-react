export const MealItem = ({ meal }) => {
  const { name, price, description, image } = meal;
  return (
    <li className='meal-item'>
      <article>
        <img
          src={image}
          alt='Meal item image'
        />
        <h3>{name}</h3>
        <div className='meal-item-price'>{price}</div>
        <p className='meal-item-description'>{description}</p>
        <div className='meal-item-actions'>
          <button>Add to Cart</button>
        </div>
      </article>
    </li>
  );
};
