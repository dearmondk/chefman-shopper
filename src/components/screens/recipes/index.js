import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../../theme';
import Recipe from './recipe';
import SharedText from '../../shared/shared-text';
import { recipeInitialState } from '../../../../data-mocks';

export default function RecipeScreen() {
  // This would be pulled via GraphQL
  const [recipes, _] = React.useState(recipeInitialState);

  return (
    <View style={styles.container}>
      <SharedText
        size={32}
        height={42}
        style={{ alignSelf: 'center', paddingBottom: 16 }}
      >
        Browse Recipes
      </SharedText>
      <View style={{ flex: 1 }}>
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.id} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.white,
  },
});
