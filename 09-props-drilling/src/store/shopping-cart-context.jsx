import { createContext } from 'react';

// Setup context
export const CartContext = createContext({
  items: [],
});

// Provide this context - wrap components inside
