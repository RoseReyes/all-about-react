import { useEffect, useState } from 'react';

import Error from './Error.jsx';
import Places from './Places.jsx';
import { fetchAvailablePlaces } from '../http.js';
import { sortPlacesByDistance } from '../loc.js';
import { useFetch } from '../hooks/useFetch.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    isFetching,
    error,
    fetchedData: availablePlaces,
    setFetchedData: setAvailablePlaces,
  } = useFetch(fetchAvailablePlaces, []);

  // navigator.geolocation.getCurrentPosition((position) => {
  //         const sortedPlaces = sortPlacesByDistance(
  //           places,
  //           position.coords.latitude,
  //           position.coords.longitude
  //         );
  //         setAvailablePlaces(sortedPlaces);
  //         setIsFetching(false);

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
