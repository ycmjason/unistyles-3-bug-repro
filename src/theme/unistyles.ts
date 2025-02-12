import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { ColorScheme } from 'react-native-unistyles/lib/typescript/src/specs/types';
const themes = {
  light: {
    background: 'white',
    text: 'black'
  },
  dark: {
    background: 'black',
    text: 'white',
  }
}

type AppThemes = typeof themes;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes { }
}

StyleSheet.configure({
  settings: {
    adaptiveThemes: true
  },
  themes,
});
