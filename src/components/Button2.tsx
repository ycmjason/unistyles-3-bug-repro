import { Text, View } from "react-native";
import { StyleSheet } from 'react-native-unistyles';

export default function Button2() {
  return (
    <View
      style={stylesheet.button}
    >
      <Text style={stylesheet.text}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}


const stylesheet = StyleSheet.create((theme, rt) => ({
  button: {
    backgroundColor: theme.background,
  },
  text: {
    color: theme.text
  }
}));
