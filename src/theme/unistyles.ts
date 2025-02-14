import { StyleSheet } from 'react-native-unistyles';
const themes = {
  light: {
    background: 'white',
    text: 'black',
  },
  dark: {
    background: 'black',
    text: 'white',
  },
};

type AppThemes = typeof themes;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  settings: {
    initialTheme: 'light',
  },
  themes,
});
