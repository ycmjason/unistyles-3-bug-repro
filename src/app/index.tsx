import { View } from 'react-native';
import { ScopedTheme, StyleSheet } from 'react-native-unistyles';

export default function Index() {
  return (
    <ScopedTheme name="dark">
      <View style={[styles.a, styles2.x]}>hi</View>
    </ScopedTheme>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  a: {},
}));

const styles2 = StyleSheet.create((theme, rt) => ({
  x: {},
}));
