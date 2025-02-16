import { StyleSheet } from 'react-native-unistyles';
const themes = {
  light: {
    background: 'yellow',
    primary: 'pink',
    text: 'black',
  },
  dark: {
    background: 'brown',
    primary: 'royalblue',
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
