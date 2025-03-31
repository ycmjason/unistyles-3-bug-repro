import { Image, StyleSheet, View } from 'react-native';

export default function Index() {
  return (
    <View>
      <Image source={require('../assets/rick.png')} />
      <Image width={30} height={30} source={require('../assets/rick.png')} />
      <Image style={styles.img} source={require('../assets/rick.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 80,
  },
});
