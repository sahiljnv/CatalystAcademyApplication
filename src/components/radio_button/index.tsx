import {View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {
  BACKGROUND_COLOR,
  PRIMARY500,
  UNSELECT_COLOR,
} from '../../style/globel_style_color';
type RadioProps = {
  selected: boolean;
};
const RadioButton = (props: RadioProps) => {
  const {selected} = props;
  return (
    <View
      style={[
        styles.cricle,
        {borderColor: selected ? PRIMARY500 : UNSELECT_COLOR},
      ]}>
      <View
        style={[
          styles.innerCircle,
          {backgroundColor: selected ? PRIMARY500 : BACKGROUND_COLOR},
        ]}
      />
    </View>
  );
};

export default RadioButton;
