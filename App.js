import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import theme from './src/theme';
import ScreenContainer from './src/screen-container';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
