import {View, Text, Pressable} from 'react-native';
import {styles} from './style';
import React from 'react';
import {PRIMARY500, WHITE_COLOR} from '../../style/globel_style_color';
import RadioButton from '../radio_button';
import {OptionProp} from '../../data/data';
import ButtonIion from 'react-native-vector-icons/MaterialCommunityIcons';

type OptionProps = {
  onPress: (id: number) => void;
  option: OptionProp;
};
const OptionItem = (props: OptionProps) => {
  const {onPress, option} = props;
  return (
    <View style={styles.selectOptionContainer}>
      <RadioButton selected={option.selected} />
      <Pressable onPress={() => onPress(option.id)}>
        <View
          style={[
            styles.optionContainer,
            {backgroundColor: option.selected ? PRIMARY500 : WHITE_COLOR},
          ]}>
          <View style={styles.iconContainer}>
            <ButtonIion
              name={option.iconName}
              color={option.selected ? WHITE_COLOR : PRIMARY500}
              size={25}
            />
          </View>

          <Text
            style={[
              styles.optionText,
              {color: option.selected ? WHITE_COLOR : PRIMARY500},
            ]}>
            {option.name}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default OptionItem;
