import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import theme from '../../../theme';
import SharedButton from '../../shared/shared-button';
import SharedText from '../../shared/shared-text';
import { useShoppingCartState } from '../../../context/shopping-cart';
import Substitution from './substitution';

export default function SubstitutionModal({ isOpen, setIsOpen }) {
  const shoppingCart = useShoppingCartState();
  const [shoppingCartInitialState, _] = React.useState(shoppingCart);

  return (
    <Modal
      testID={'modal'}
      isVisible={isOpen}
      onSwipeComplete={() => setIsOpen(isOpen)}
      swipeDirection={['down']}
      style={styles.modal}
      onBackdropPress={() => setIsOpen(false)}
      useNativeDriver={true}
    >
      <View style={styles.modalBody}>
        <View style={styles.modalText}>
          <SharedText
            height={32}
            size={24}
            style={{ paddingBottom: 8, fontWeight: '600' }}
          >
            Substitutions
          </SharedText>
          <SharedText
            height={24}
            size={16}
            style={{ paddingBottom: 8, fontWeight: '500' }}
          >
            Select any substitutions below:
          </SharedText>
          {Object.values(shoppingCartInitialState).map((ingredient) => (
            <Substitution ingredient={ingredient} key={ingredient.id} />
          ))}
        </View>
        <SharedButton
          type="primary"
          onPress={() => {
            setIsOpen(false);
          }}
        >
          OK
        </SharedButton>
        <View style={{ height: 38 }} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalBody: {
    backgroundColor: theme.colors.white,
    maxHeight: 600,
    minHeight: 200,
    paddingTop: 24,
  },
  modalText: {
    width: '100%',
    paddingHorizontal: 16,
    alignSelf: 'center',
  },
});
