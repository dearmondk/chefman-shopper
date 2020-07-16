import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme';
import LoadShimmer from 'react-native-load-shimmer';

export default function GhostUI() {
  const shimmerConfig = {
    startX: -200,
    useNativeDriver: true,
    shimmerColor: '#FFF',
    toValue: Dimensions.get('window').width + 100,
    opacityArr: [0.05, 0.18, 0.28, 0.35, 0.4, 0.35, 0.28, 0.18, 0.05],
  };
  return (
    <LoadShimmer
      isShimmering={true}
      shimmerConfig={shimmerConfig}
      containerStyle={styles.container}
    >
      <View style={[styles.ghost, { width: 130, height: 24, marginTop: 24 }]} />
      <View style={[styles.ghost, { height: 96 }]} />
      <View style={[styles.ghost, { height: 96 }]} />
      <View style={[styles.ghost, { height: 32 }]} />
      <View style={[styles.ghost, { height: 32 }]} />
    </LoadShimmer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 16,
    marginBottom: 8,
    backgroundColor: theme.colors.white,
    position: 'relative',
  },
  ghost: {
    backgroundColor: theme.colors.primary100,
    marginBottom: 24,
  },
});
