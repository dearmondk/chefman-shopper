module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react-native/no-inline-styles': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
  },
};
