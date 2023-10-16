import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  BLACK_COLOR,
  PRIMARY500,
  WHITE_COLOR,
} from '../../style/globel_style_color';
export const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: BACKGROUND_COLOR,
  },
  headingText: {
    color: BLACK_COLOR,
    padding: 20,
    fontSize: 24,
  },
  stageHeaderContainer: {
    height: '20%',
    justifyContent: 'center',
  },
  optionsContainer: {
    height: '40%',
    paddingHorizontal: 17,
  },
  formConatainer: {
    height: '40%',
    paddingHorizontal: 17,
    justifyContent: 'center',
  },
  formHeading: {
    color: PRIMARY500,
    fontSize: 18,
    paddingLeft: 7,
    paddingBottom: 10,
  },
  cardLabel: {
    fontSize: 12,
    color: BLACK_COLOR,
    paddingBottom: 10,
  },
  multiLineText: {
    height: 124,
    textAlignVertical: 'top',
    backgroundColor: WHITE_COLOR,
    color: BLACK_COLOR,
  },
  textInput: {
    color: BLACK_COLOR,
    backgroundColor: WHITE_COLOR,
  },
  inputConatiner: {
    paddingVertical: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
});
