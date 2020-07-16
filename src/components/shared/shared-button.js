import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import theme from '../../theme';
import SharedText from './shared-text';

const backgroundColorMap = {
  primary: theme.colors.black,
  secondary: theme.colors.white,
};

export default function SharedButton({
  onPress,
  styleOverride = {
    View: {},
    Text: {},
  },
  type = 'primary',
  disabled = false,
  children,
}) {
  const backgroundColor =
    backgroundColorMap[type] || backgroundColorMap.secondary;
  const color = type === 'primary' ? theme.colors.white : theme.colors.black;
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={{ ...styles.container, backgroundColor, ...styleOverride.View }}
      >
        <SharedText
          font="medium"
          size={16}
          height={48}
          style={{
            ...styleOverride.Text,
            color: styleOverride.Text?.color || color,
            fontWeight: '700',
          }}
        >
          {children}
        </SharedText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
});
