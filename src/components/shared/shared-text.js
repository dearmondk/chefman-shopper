import * as React from 'react';
import { Text } from 'react-native';
import theme from '../../theme';

const colorMap = {
  primary: theme.colors.black,
  secondary: theme.colors.primary600,
  tertiary: theme.colors.primary500,
  error: theme.colors.negative,
  success: theme.colors.positive300,
};

export const SharedText = ({ color, size, height, style, children }) => {
  return (
    <Text
      // $FlowFixMe
      style={{
        color: colorMap[color || 'primary'],
        fontSize: size,
        lineHeight: height,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export default SharedText;
