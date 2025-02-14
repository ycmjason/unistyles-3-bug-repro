import type { ReactNode } from 'react';
import { Text, type TextProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export const TestText = ({ style, ...props }: TextProps): ReactNode => {
  return <Text style={[stylesheet.text, style]} {...props} />;
};

const stylesheet = StyleSheet.create(theme => ({
  text: {},
}));
