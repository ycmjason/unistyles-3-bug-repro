import { Pressable, PressableStateCallbackType, Text, } from "react-native";
import { StyleSheet } from 'react-native-unistyles';

export default function Button1() {
  return (
    <Pressable
      style={stylesheet.button}
    >
      <Text style={stylesheet.text(true)}>Edit app/index.tsx to edit this screen.</Text>
    </Pressable>
  );
}


const stylesheet = StyleSheet.create((theme, rt) => ({
  button: ({ pressed }: Pick<PressableStateCallbackType, 'pressed'>) => ({
    backgroundColor: theme.background,
    opacity: pressed ? 0.8 : 1,
  }),
  text: (isHappy) => ({
    color: theme.text,
  }),
}));
