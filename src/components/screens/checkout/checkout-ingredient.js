import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import SharedText from '../../shared/shared-text';
import MinusIcon from '../../../svg/minus-icon';
import PlusIcon from '../../../svg/plus-icon';
import theme from '../../../theme';
import { useShoppingCartDispatch } from '../../../context/shopping-cart';

export default function CheckoutIngredient({ ingredient }) {
  const updateShoppingCart = useShoppingCartDispatch();

  const handleIncreaseCount = () => {
    updateShoppingCart({
      type: 'ADD',
      payload: {
        ingredient: {
          ...ingredient,
          quantity: 1,
        },
      },
    });
  };

  const handleReduceCount = () => {
    updateShoppingCart({
      type: 'REMOVE',
      payload: {
        ingredient: {
          ...ingredient,
          quantity: 1,
        },
      },
    });
  };

  if (ingredient.quantity < 1) return null;

  return (
    <View style={styles.container}>
      <SharedText size={18} style={{ flex: 0.9 }}>
        {ingredient.name}
      </SharedText>
      <SharedText size={18} style={{ flex: 0.1 }}>
        {ingredient.quantity}
      </SharedText>
      <TouchableOpacity onPress={handleIncreaseCount} style={{ flex: 0.15 }}>
        <PlusIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReduceCount} style={{ flex: 0.15 }}>
        <MinusIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.borderOpaque,
    flexDirection: 'row',
  },
});
