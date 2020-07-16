import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import theme from '../../../theme';
import {
  useShoppingCartState,
  useShoppingCartDispatch,
} from '../../../context/shopping-cart';
import CheckoutIngredient from './checkout-ingredient';
import SharedText from '../../shared/shared-text';
import TrashCan from '../../../svg/trash-can';
import EmptyCart from '../../../svg/empty-cart';
import SubstitutionModal from './substitution-modal';
import SelectStoreModal from './select-store-modal';
import { mockedStores } from '../../../../data-mocks';
import { ROUTES } from '../../../constants';

const totalCost = (shoppingCart, selectedStore) => {
  let total = 0;
  Object.values(shoppingCart).forEach((ingredient) => {
    if (ingredient.quantity) {
      const cost = selectedStore?.ingredients[ingredient.id]?.price;
      total += cost * ingredient.quantity;
    }
  });
  return total.toFixed(2);
};

export default function CheckoutScreen({ navigation }) {
  const shoppingCart = useShoppingCartState();
  const updateShoppingCart = useShoppingCartDispatch();
  const [isSubstitutionOpen, setIsSubstitutionOpen] = React.useState(false);
  const [isStoresModalOpen, setIsStoresModalOpen] = React.useState(false);
  const [selectedStore, setSelectedStore] = React.useState(null);
  const [eta, setEta] = React.useState(null);

  React.useEffect(() => {
    const getEta = (min, max) => {
      return Math.random() * (max - min) + min;
    };
    if (selectedStore) {
      setEta(getEta(selectedStore.etaMin, selectedStore.etaMax).toFixed(0));
    }
  }, [selectedStore]);

  const clearShoppingCart = () => {
    updateShoppingCart({
      type: 'CLEAR',
      payload: {},
    });
  };

  const confirmCheckout = () => {
    Alert.alert(
      `Order Total: $${totalCost(shoppingCart, selectedStore)}`,
      `ETA: ${eta} minutes`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Place Order',
          onPress: () => {
            clearShoppingCart();
            navigation.navigate(ROUTES.CONFIRMATION);
          },
        },
      ],
      { cancelable: true }
    );
  };

  if (Object.entries(shoppingCart).length === 0) {
    return (
      <View accessibilityLabel="empty cart" style={styles.emptyCart}>
        <EmptyCart />
        <SharedText
          style={{ paddingTop: 24, paddingBottom: 6 }}
          height={24}
          size={18}
          font="medium"
        >
          Your cart is Empty!
        </SharedText>
        <SharedText height={24} size={16}>
          Add a recipe to your cart to get started
        </SharedText>
        <TouchableOpacity
          accessibilityLabel="navigate to recipes"
          onPress={() => navigation.navigate('Recipes')}
          style={styles.browseRecipes}
        >
          <SharedText>Browse Recipes</SharedText>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <SharedText
        size={32}
        height={42}
        style={{ alignSelf: 'center', paddingBottom: 16 }}
      >
        Shopping Cart
      </SharedText>
      <ScrollView
        accessibilityLabel="shopping cart"
        style={{ flex: 0.7, paddingBottom: 16 }}
      >
        {Object.values(shoppingCart).map((ingredient, i) => (
          <CheckoutIngredient ingredient={ingredient} key={i} />
        ))}
      </ScrollView>
      {!selectedStore && (
        <View style={styles.centerColumn}>
          <SharedText size={18} height={24}>
            Select a store to calculate price and ETA
          </SharedText>
        </View>
      )}
      {selectedStore && (
        <View style={styles.centerColumn}>
          <SharedText size={18} height={24}>
            Selected Store: {selectedStore.name}
          </SharedText>
          <SharedText size={18} height={24}>
            Total: ${totalCost(shoppingCart, selectedStore)}
          </SharedText>
          <SharedText size={18} height={24}>
            ETA: {eta} minutes
          </SharedText>
        </View>
      )}
      <TouchableOpacity
        accessibilityLabel="clear shopping cart"
        onPress={clearShoppingCart}
        style={styles.clearCart}
      >
        <SharedText size={18} style={{ marginRight: 8 }}>
          Clear cart?
        </SharedText>
        <TrashCan />
      </TouchableOpacity>
      <View
        style={{
          flex: 0.7,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => setIsSubstitutionOpen(true)}
          style={styles.button}
        >
          <SharedText size={18}>Find Substitutes?</SharedText>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel="select a store"
          onPress={() => setIsStoresModalOpen(true)}
          style={styles.button}
        >
          <SharedText size={18}>Select Store</SharedText>
        </TouchableOpacity>
        {selectedStore && (
          <TouchableOpacity
            accessibilityLabel="checkout"
            onPress={() => confirmCheckout()}
            style={[
              styles.button,
              { backgroundColor: theme.colors.positive300 },
            ]}
          >
            <SharedText size={18}>Checkout</SharedText>
          </TouchableOpacity>
        )}
      </View>
      <SubstitutionModal
        setIsOpen={setIsSubstitutionOpen}
        isOpen={isSubstitutionOpen}
      />
      <SelectStoreModal
        setIsOpen={setIsStoresModalOpen}
        isOpen={isStoresModalOpen}
        stores={mockedStores}
        selectedStore={selectedStore}
        setSelectedStore={setSelectedStore}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.white,
  },
  button: {
    width: '48%',
    padding: 16,
    borderRadius: 16,
    backgroundColor: theme.colors.borderOpaque,
    marginBottom: 8,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCart: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  clearCart: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 16,
  },
  browseRecipes: {
    marginTop: 16,
    padding: 12,
    backgroundColor: theme.colors.borderOpaque,
    borderRadius: 8,
  },
  centerColumn: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
