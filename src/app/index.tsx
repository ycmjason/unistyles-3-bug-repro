import { Pressable, Text } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { ScopedTheme, StyleSheet } from 'react-native-unistyles';

export default function Index() {
  // not used
  useSharedValue(0);
  return (
    <ScopedTheme name="dark">
      <Pressable style={state => [styles.x(state)]}>
        <Text>hi</Text>
      </Pressable>
    </ScopedTheme>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  x: ({ pressed }: { pressed: boolean }) => ({
    backgroundColor: theme.background,
    opacity: pressed ? 0.7 : 1,
  }),
}));
