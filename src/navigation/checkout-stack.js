import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants';
import CheckoutScreen from '../components/screens/checkout';
import Confirmation from '../components/screens/checkout/confirmation';

const Stack = createStackNavigator();

export default function CheckoutStack({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      e.preventDefault();
      navigation.navigate('/');
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="/" component={CheckoutScreen} />
      <Stack.Screen name={ROUTES.CONFIRMATION} component={Confirmation} />
    </Stack.Navigator>
  );
}
