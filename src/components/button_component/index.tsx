import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './style';
type ButtonProps = {
  name: string;
  onPress: () => void;
};
const Button = (props: ButtonProps) => {
  const {name, onPress} = props;
  return (
    <Pressable onPress={onPress}>
      <View style={styles.innerButton}>
        <Text style={styles.buttonText}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
