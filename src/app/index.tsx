import { ScopedTheme, StyleSheet } from 'react-native-unistyles';
import { TestText } from '../components/MyText';

export default function Index() {
  return (
    <ScopedTheme name="dark">
      <TestText style={styles.x}>hi</TestText>
    </ScopedTheme>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  x: {},
}));
