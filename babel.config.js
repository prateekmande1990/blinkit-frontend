module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@features': './src/features',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@state': './src/state',
          '@style': './src/style',
          '@types': './src/types',
          '@utils': './src/utils',
          '@service': './src/service',
        },
      },
    ],
  ],
};
