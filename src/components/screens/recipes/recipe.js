import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import SharedText from '../../shared/shared-text';
import theme from '../../../theme';
import PlusIcon from '../../../svg/plus-icon';
import { useShoppingCartDispatch } from '../../../context/shopping-cart';

export default function Recipe({ recipe }) {
  const updateShoppingCart = useShoppingCartDispatch();

  const addRecipeToCart = () => {
    recipe.ingredients.forEach((ingredient) => {
      updateShoppingCart({
        type: 'ADD',
        payload: {
          ingredient,
        },
      });
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={addRecipeToCart}>
      <SharedText size={18} height={24} style={{ flex: 1 }}>
        {recipe.name}
      </SharedText>
      <PlusIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: theme.colors.white,
    marginBottom: 8,
    flexDirection: 'row',
    borderColor: theme.colors.borderOpaque,
    borderBottomWidth: 1,
  },
});
