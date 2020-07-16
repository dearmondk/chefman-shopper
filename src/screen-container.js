import React from 'react';
import { ShoppingCartProvider } from './context/shopping-cart';
import AppNavigation from './navigation/tab-navigator';

export default function ScreenContainer() {
  return (
    <ShoppingCartProvider>
      <AppNavigation />
    </ShoppingCartProvider>
  );
}
