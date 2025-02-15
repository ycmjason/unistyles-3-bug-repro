import { Text, View } from 'react-native';
import { ScopedTheme, StyleSheet } from 'react-native-unistyles';

export default function Index() {
  return (
    <ScopedTheme name="dark">
      <View style={[styles.x, { justifyContent: 'center' }]}>
        <Text style={[styles.y, { textAlign: 'center' }]}>hi</Text>
        <Text style={[styles.y]}>hi</Text>
      </View>
      <View style={[styles.x]}>
        <Text style={[styles.y, { textAlign: 'center' }]}>hi</Text>
        <Text style={[styles.y]}>hi</Text>
      </View>
    </ScopedTheme>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  x: {
    backgroundColor: theme.background,
  },
  y: {
    color: theme.text,
  },
}));
