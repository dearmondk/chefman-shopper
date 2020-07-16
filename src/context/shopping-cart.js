import * as React from 'react';

const ShoppingCartStateContext = React.createContext({});
const ShoppingCartDispatchContext = React.createContext(() => {});

function shoppingCartReducer(
  state,
  { type, payload: { ingredient, substitution } }
) {
  switch (type) {
    case 'ADD':
      if (state[ingredient.id]) {
        return {
          ...state,
          [ingredient.id]: {
            ...state[ingredient.id],
            quantity: state[ingredient.id].quantity + ingredient.quantity,
          },
        };
      } else {
        return {
          ...state,
          [ingredient.id]: ingredient,
        };
      }
    case 'REMOVE':
      return {
        ...state,
        [ingredient.id]: {
          ...state[ingredient.id],
          quantity: state[ingredient.id].quantity - 1,
        },
      };
    case 'SUBSTITUTE':
      return {
        ...state,
        [ingredient.id]: {
          quantity: 0,
        },
        [substitution.id]: substitution,
      };
    case 'CLEAR':
      return {};
  }
}

function ShoppingCartProvider({ children }) {
  const [shoppingCart, updateShoppingCart] = React.useReducer(
    shoppingCartReducer,
    {}
  );
  return (
    <ShoppingCartStateContext.Provider value={shoppingCart}>
      <ShoppingCartDispatchContext.Provider value={updateShoppingCart}>
        {children}
      </ShoppingCartDispatchContext.Provider>
    </ShoppingCartStateContext.Provider>
  );
}

function useShoppingCartState() {
  const context = React.useContext(ShoppingCartStateContext);
  if (context === undefined) {
    throw new Error(
      'ShoppingCartStateContext must be used within a ShoppingCartProvider'
    );
  }
  return context;
}

function useShoppingCartDispatch() {
  const context = React.useContext(ShoppingCartDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useShoppingCartDispatch must be used within a ShoppingCartProvider'
    );
  }
  return context;
}

export { ShoppingCartProvider, useShoppingCartState, useShoppingCartDispatch };
