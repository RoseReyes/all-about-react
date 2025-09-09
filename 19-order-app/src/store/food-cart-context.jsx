import { createContext, useReducer } from 'react';

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
});

// return updated state
const foodCartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (existingCartItem) {
        const existingCartItemIndex = state.items.findIndex(
          (cartItem) => cartItem.id === action.item.id
        );
        const updatedItems = [...state.items];
        const existingCartItem = updatedItems[existingCartItemIndex];

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
      const existingCartItemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      const updatedItems = [...state.items];
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem.quantity === 1) {
        updatedItems.splice[(existingCartItemIndex, 1)];
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        ...state,
        item: updatedItems,
      };
  }
};
export const FoodCartContextProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(foodCartReducer, {
    items: [],
  });

  const cartContext = {
    items: cart.items,
    addItemToCart,
    removeItemToCart,
  };

  const addItemToCart = (item) => {
    dispatchCartAction({
      type: 'ADD_ITEM',
      item,
    });
  };

  const removeItemToCart = (id) => {
    dispatchCartAction({
      type: 'REMOVE_ITEM',
      id,
    });
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
