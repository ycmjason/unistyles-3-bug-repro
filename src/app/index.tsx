import { Pressable, type PressableProps, Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const BaseButton = ({ style, ...props }: PressableProps) => {
  return (
    <Pressable
      style={state => [baseStyles.base, typeof style === 'function' ? style(state) : style]}
      {...props}
    />
  );
};

const baseStyles = StyleSheet.create(theme => ({
  base: {
    padding: 8,
  },
}));

////

const Button = ({ style, ...props }: PressableProps) => {
  return (
    <BaseButton
      style={state => [buttonStyles.button, typeof style === 'function' ? style(state) : style]}
      {...props}
    />
  );
};

const buttonStyles = StyleSheet.create(theme => ({
  button: {
    backgroundColor: theme.background,
  },
}));

///

const Button2 = ({ style, ...props }: PressableProps) => {
  return (
    <Button style={state => [typeof style === 'function' ? style(state) : style]} {...props} />
  );
};

///

export default function Index() {
  return (
    <View>
      <Button2>
        <Text>Working</Text>
      </Button2>
    </View>
  );
}
