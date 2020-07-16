import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import theme from '../../../theme';
import SharedButton from '../../shared/shared-button';
import SharedText from '../../shared/shared-text';
import RightArrow from '../../../svg/right-arrow';

export default function SelectStoreModal({
  isOpen,
  setIsOpen,
  stores,
  setSelectedStore,
}) {
  const handleSelectStore = (store) => {
    setSelectedStore(store);
    setIsOpen(false);
  };

  return (
    <Modal
      queryByA11yLabel={'select store modal'}
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
            Select a Store
          </SharedText>
          <SharedText
            height={24}
            size={16}
            style={{ paddingBottom: 16, fontWeight: '500' }}
          >
            ETAs will calculate after choosing a store
          </SharedText>
          {stores.map((store) => (
            <TouchableOpacity
              queryByA11yLabel={`select ${store.name}`}
              onPress={() => handleSelectStore(store)}
              key={store.id}
              style={styles.store}
            >
              <SharedText size={16} style={{ flex: 1 }}>
                {store.name}
              </SharedText>
              <SharedText
                size={16}
              >{`${store.etaMin}-${store.etaMax} minutes`}</SharedText>
              <RightArrow />
            </TouchableOpacity>
          ))}
        </View>
        <SharedButton
          type="secondary"
          onPress={() => {
            setIsOpen(false);
          }}
        >
          Cancel
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
  store: {
    paddingVertical: 16,
    flexDirection: 'row',
    borderColor: theme.colors.borderOpaque,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
