import { createContext, useReducer } from 'react';

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  updateItemQuantity: () => {},
});

// return updated state
const foodCartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingCartItemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === action.item.id
      );

      const updatedItems = [...state.items];
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({
          ...action.item,
          quantity: 1,
        });
      }

      return {
        ...state,
        items: updatedItems,
      };
    case 'REMOVE_ITEM':
  }
};
export const FoodCartContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(foodCartReducer, {
    items: [],
  });

  const handleItemToCart = (id) => {};

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleItemToCart,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
};
