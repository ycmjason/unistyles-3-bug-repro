import { View } from "react-native";
import { StyleSheet } from 'react-native-unistyles';
import Button1 from '../components/Button1';
import Button2 from '../components/Button2';

export default function Index() {
  return (
    <View style={stylesheet.container}>
      <Button1 />
      <Button2 />
    </View>
  );
}


const stylesheet = StyleSheet.create((theme, rt) => ({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    paddingTop: rt.insets.top,
  },
}));
