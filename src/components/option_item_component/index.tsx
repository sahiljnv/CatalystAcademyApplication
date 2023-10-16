import {View, Text, Pressable} from 'react-native';
import {styles} from './style';
import React from 'react';
import {PRIMARY500, WHITE_COLOR} from '../../style/globel_style_color';
import RadioButton from '../radio_button';
import {ListProps} from '../../data/data';
type OptionProps = {
  selected: boolean;
  onPress: (id: number) => void;
  option: ListProps;
};
const OptionItem = (props: OptionProps) => {
  const {selected, onPress, option} = props;
  return (
    <View style={styles.selectOptionContainer}>
      <RadioButton selected={option.selected} />
      <Pressable onPress={() => onPress(option.id)}>
        <View
          style={[
            styles.optionContainer,
            {backgroundColor: selected ? PRIMARY500 : WHITE_COLOR},
          ]}>
          <Text
            style={[
              styles.optionText,
              {color: selected ? WHITE_COLOR : PRIMARY500},
            ]}>
            {option.name}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default OptionItem;
