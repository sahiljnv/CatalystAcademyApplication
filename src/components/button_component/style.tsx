import {StyleSheet} from 'react-native';
import {PRIMARY500, WHITE_COLOR} from '../../style/globel_style_color';

export const styles = StyleSheet.create({
  innerButton: {
    height: 40,
    width: 100,
    backgroundColor: WHITE_COLOR,
    borderWidth: 2,
    borderColor: PRIMARY500,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: PRIMARY500,
    fontSize: 14,
  },
});
