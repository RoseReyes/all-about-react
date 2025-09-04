import { createContext, useContext, useReducer } from 'react';

export const CartContext = createContext({
  addItemToCart: () => {},
});
