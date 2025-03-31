import { Image, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function Index() {
  return (
    <View>
      <Image source={require('../assets/rick.png')} />
      <Image width={5} height={5} source={require('../assets/rick.png')} />
      <Image style={styles.img} source={require('../assets/rick.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 20,
    height: 20,
  },
});
