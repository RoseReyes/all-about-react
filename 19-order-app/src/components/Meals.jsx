import { useEffect, useState } from 'react';

import MealItem from './MealItem';

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('http://localhost:3000/meals');
      const resData = await response.json();

      if (!response.ok) {
        //... do something with the error
      }

      setLoadedMeals(resData);
    };

    fetchMeals();
  }, []);

  return (
    <ul id='meals'>
      {loadedMeals.map((meal) => (
        <MealItem
          key={meal.id}
          meal={meal}
        />
      ))}
    </ul>
  );
};

export default Meals;
