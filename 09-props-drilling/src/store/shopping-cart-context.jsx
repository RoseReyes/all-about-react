import { createContext } from 'react';

// Setup context
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

// Provide this context - wrap components inside
