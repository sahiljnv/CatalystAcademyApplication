import {StyleSheet} from 'react-native';
import {
  PRIMARY500,
  STAGE_NAME,
  WHITE_COLOR,
} from '../../style/globel_style_color';
export const styles = StyleSheet.create({
  circle: {
    height: 46,
    width: 46,
    borderWidth: 2,
    borderColor: PRIMARY500,
    borderRadius: 23,
    backgroundColor: PRIMARY500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleNum: {
    color: WHITE_COLOR,
    fontSize: 18,
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  hrLine: {
    backgroundColor: PRIMARY500,
    height: 2,
    width: 70,
  },
  stageName: {
    color: STAGE_NAME,
    fontSize: 12,
  },
  hrLiseContainer: {
    flexGrow: 1,
  },
});
