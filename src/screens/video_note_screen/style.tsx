import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  BLACK_COLOR,
  PRIMARY300,
  WHITE_COLOR,
} from '../../style/globel_style_color';

export const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    height: 460,
    width: 310,
    backgroundColor: WHITE_COLOR,
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  videoHeading: {
    fontSize: 19,
    color: PRIMARY300,
    marginHorizontal: 22,
  },
  playerName: {
    color: BLACK_COLOR,
    marginLeft: 30,
  },
  videoPlayer: {
    height: 250,
  },
  playArrow: {
    color: WHITE_COLOR,
    backgroundColor: PRIMARY300,
    borderRadius: 35,
  },
});
