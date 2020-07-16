import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import theme from '../theme';
import RecipeScreen from '../components/screens/recipes';
import CheckoutStack from './checkout-stack';
import { ROUTES } from '../constants';

const BottomTab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName={ROUTES.RECIPES}
          tabBarOptions={{
            activeTintColor: theme.colors.primary,
            labelStyle: { fontSize: 18 },
            tabStyle: { height: 50 },
            style: styles.tabBarOptions,
          }}
        >
          <BottomTab.Screen name={ROUTES.RECIPES} component={RecipeScreen} />
          <BottomTab.Screen name={ROUTES.CHECKOUT} component={CheckoutStack} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary100,
  },
  tabBarOptions: {
    paddingTop: 10,
    paddingBottom: 5,
    height: 75,
    borderTopWidth: 2,
    borderTopColor: theme.colors.primary100,
  },
});
