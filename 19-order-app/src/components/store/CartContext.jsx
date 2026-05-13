import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

// return new state based on action type
function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedItems = [...state.items];
    if (existingCartItemIndex > -1) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id,
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedItems = [...state.items];

    // if qty is > 1 then reduce the qty by 1, else remove the item from the cart
    if (existingItem.quantity > 1) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.splice(existingCartItemIndex, 1);
    }

    return { ...state, items: updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', item });
  };
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
