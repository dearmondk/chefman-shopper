import CheckoutScreen from '../index';
import { render, fireEvent } from 'react-native-testing-library';
import React from 'react';
import { ShoppingCartProvider } from '../../../../context/shopping-cart';
import { recipeInitialState } from '../../../../../data-mocks';
import {
  useShoppingCartState,
  useShoppingCartDispatch,
} from '../../../../context/shopping-cart';

jest.mock('../../../../context/shopping-cart', () => {
  const actual = jest.requireActual('../../../../context/shopping-cart');
  return {
    ...actual,
    useShoppingCartDispatch: jest.fn(),
    useShoppingCartState: jest.fn(),
  };
});

describe('CheckoutScreen Tests', () => {
  it('Renders empty cart state', async () => {
    useShoppingCartState.mockReturnValueOnce({});
    const navigation = { navigate: jest.fn(), addListener: jest.fn() };
    const { getByA11yLabel } = render(
      <ShoppingCartProvider>
        <CheckoutScreen navigation={navigation} />
      </ShoppingCartProvider>
    );
    const emptyCart = getByA11yLabel('empty cart');
    expect(emptyCart).toBeTruthy();
  });

  it('Does not show checkout button with no selected store', async () => {
    useShoppingCartState.mockReturnValueOnce({});
    const navigation = { navigate: jest.fn(), addListener: jest.fn() };
    const { queryByA11yLabel } = render(
      <ShoppingCartProvider>
        <CheckoutScreen navigation={navigation} />
      </ShoppingCartProvider>
    );
    const emptyCart = queryByA11yLabel('checkout');
    expect(emptyCart).toBeFalsy();
  });

  it('Empty state can navigate back', async () => {
    useShoppingCartState.mockReturnValueOnce({});
    const mockedNavigate = jest.fn();
    const navigation = { navigate: mockedNavigate, addListener: jest.fn() };
    const { getByA11yLabel } = render(
      <ShoppingCartProvider>
        <CheckoutScreen navigation={navigation} />
      </ShoppingCartProvider>
    );
    const navigateToRecipes = getByA11yLabel('navigate to recipes');
    fireEvent(navigateToRecipes, 'press');
    expect(mockedNavigate).toHaveBeenCalledWith('Recipes');
  });

  it('Renders data state with correct number of ingredients', async () => {
    useShoppingCartState.mockReturnValue(recipeInitialState[0].ingredients);
    const navigation = { navigate: jest.fn(), addListener: jest.fn() };
    const { getByA11yLabel } = render(
      <ShoppingCartProvider>
        <CheckoutScreen navigation={navigation} />
      </ShoppingCartProvider>
    );
    const shoppingCart = getByA11yLabel('shopping cart');
    expect(shoppingCart).toBeTruthy();
    expect(shoppingCart.props.children[1].props.children.length).toEqual(5);
  });

  it('Clicking clear cart clears cart contents', async () => {
    const mockDispatch = jest.fn();
    useShoppingCartState.mockReturnValue(recipeInitialState[0].ingredients);
    useShoppingCartDispatch.mockReturnValue(mockDispatch);
    const navigation = { navigate: jest.fn(), addListener: jest.fn() };
    const { getByA11yLabel } = render(
      <ShoppingCartProvider>
        <CheckoutScreen navigation={navigation} />
      </ShoppingCartProvider>
    );
    const clearCart = getByA11yLabel('clear shopping cart');
    fireEvent(clearCart, 'press');
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'CLEAR',
      payload: {},
    });
  });
});
