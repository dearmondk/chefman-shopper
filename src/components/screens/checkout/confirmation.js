import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import SharedText from '../../shared/shared-text';
import theme from '../../../theme';
import GhostUI from '../../shared/ghost-ui';

export default function Confirmation() {
  const [showLoading, setShowLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setShowLoading(false), 2000);
  }, []);

  if (showLoading)
    return (
      <ScrollView testID="loading-ui" style={{ height: '100%' }}>
        <GhostUI />
        <GhostUI />
      </ScrollView>
    );
  return (
    <View style={styles.container}>
      <SharedText size={32} color="success" style={{ fontWeight: '600' }}>
        ORDER PLACED!
      </SharedText>
      <Image
        source={require('../../../../assets/all_the_things.jpg')}
        style={{ width: '100%', resizeMode: 'center' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
