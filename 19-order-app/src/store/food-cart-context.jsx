import { createContext, useReducer } from 'react';

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  const handleItemToCart = (id) => {
    shoppingCartDispatch({
      type: 'ADD_ITEM',
      payload: id,
    });
  };

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleItemToCart,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
};
