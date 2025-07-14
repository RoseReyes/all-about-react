import { useEffect, useState } from 'react';

import Error from './Error.jsx';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const response = await fetch('http://localhost:3000/placees');
        const resData = await response.json();
        setAvailablePlaces(resData.places);

        if (!response.ok) {
          throw new Error('Failed  to fetch places');
        }
      } catch (error) {
        setError({
          message:
            error.message || 'Could not fetch places please try again later.',
        });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return (
      <Error
        title='An error occurred!'
        message={error.message}
      />
    );
  }

  return (
    <Places
      title='Available Places'
      places={availablePlaces}
      isLoading={isFetching}
      loadingText='Fetching place data...'
      fallbackText='No places available.'
      onSelectPlace={onSelectPlace}
    />
  );
}
