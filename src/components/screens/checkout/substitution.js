import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../../../theme';
import SharedText from '../../shared/shared-text';
import { useShoppingCartDispatch } from '../../../context/shopping-cart';

export default function Substitution({ ingredient }) {
  const updateShoppingCart = useShoppingCartDispatch();

  if (!ingredient?.substitutions?.length) return null;

  const substituteItem = (substitution) => {
    updateShoppingCart({
      type: 'SUBSTITUTE',
      payload: {
        substitution,
        ingredient,
      },
    });
  };

  return (
    <View style={styles.container}>
      <SharedText
        size={18}
        style={{ fontWeight: '600', paddingBottom: 4, flex: 1 }}
      >
        {ingredient.name}
      </SharedText>
      <View style={{ marginLeft: 8, flex: 1 }}>
        {ingredient.substitutions.map((substitution) => (
          <TouchableOpacity
            onPress={() => substituteItem(substitution)}
            key={substitution.id}
            style={{
              padding: 8,
              marginBottom: 12,
              backgroundColor: theme.colors.borderOpaque,
              borderRadius: 8,
            }}
          >
            <SharedText size={18} height={24}>
              {substitution.name}
            </SharedText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderOpaque,
    width: '100%',
    flexDirection: 'row',
  },
  section: {
    flex: 1,
  },
});
