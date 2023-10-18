import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  PRIMARY300,
  PRIMARY500,
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
  audioContainer: {
    height: 460,
    width: 310,
    backgroundColor: PRIMARY500,
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  audioHeading: {
    fontSize: 19,
    color: WHITE_COLOR,
    marginHorizontal: 22,
  },
  playerName: {
    color: WHITE_COLOR,
    marginLeft: 30,
  },
  playButtonContainer: {
    height: 50,
    width: 50,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY300,
    marginLeft: 20,
  },
});
