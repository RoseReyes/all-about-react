import { MealItem } from './MealItem';
import { useEffect } from 'react';
import { useState } from 'react';

export const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsFetching(true);

      try {
        const response = await fetch('http://localhost:3000/meals');
        const meals = await response.json();

        setLoadedMeals(meals);
        setIsFetching(false);
      } catch (error) {
        setError({
          message: error.message || 'Failed to fetch meals',
        });
        setIsFetching(false);
      }
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
