import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import StageRow from '../../components/stage_component';
import {ListProp, OPTIONS_LIST, OptionProp, STAGE_LIST} from '../../data/data';
import OptionItem from '../../components/option_item_component';
import Button from '../../components/button_component';
const CreateCard = () => {
  const [optionList, setOptionList] = useState<OptionProp[]>(OPTIONS_LIST);
  const [stageList, setStageList] = useState<ListProp[]>(STAGE_LIST);
  const onPressButtonHandler = () => {
    optionList.map(option => {
      if (option.selected) {
        console.log(option.id);
        return;
      }
    });
  };
  const onPressOptionHandler = (id: number) => {
    setOptionList(prevList =>
      prevList.map(element => {
        if (element.id === id) {
          return {
            ...element,
            selected: true,
          };
        } else {
          return {
            ...element,
            selected: false,
          };
        }
      }),
    );
  };
  const findCurrentStage = (): number => {
    let selectedId: number = 0;
    for (let i = 0; i < stageList.length - 1; i++) {
      if (stageList[i].selected && !stageList[i + 1].selected) {
        selectedId = stageList[i].id;
      } else if (
        stageList[i].selected &&
        stageList[i + 1].selected &&
        i + 2 === stageList.length
      ) {
        selectedId = i + 2;
      }
    }
    return selectedId;
  };
  const prevButtonHandler = () => {
    const currentSelectedId: number = findCurrentStage();
    console.log(currentSelectedId);
    setStageList(prevList =>
      prevList.map(element => {
        if (element.id === currentSelectedId && element.id !== 1) {
          return {
            ...element,
            selected: false,
          };
        } else {
          return {
            ...element,
          };
        }
      }),
    );
  };
  const nextButtonHandler = () => {
    const currentSelectedId: number = findCurrentStage();
    setStageList(prevList =>
      prevList.map(element => {
        if (element.id === currentSelectedId + 1 && element.id !== 1) {
          return {
            ...element,
            selected: true,
          };
        } else {
          return {
            ...element,
          };
        }
      }),
    );
  };
  const HEIGHT = Dimensions.get('screen').height;
  return (
    <KeyboardAvoidingView style={{height: HEIGHT}} behavior="height">
      <ScrollView style={{height: HEIGHT}} overScrollMode="never">
        <View style={styles.mainContainer}>
          <View style={styles.stageHeaderContainer}>
            <Text style={styles.headingText}>Create Card</Text>
            <StageRow listOfStage={stageList} />
          </View>
          <View style={styles.formConatainer}>
            <Text style={styles.formHeading}>Card Front</Text>
            <View style={styles.inputConatiner}>
              <Text style={styles.cardLabel}>Card Name</Text>
              <TextInput style={styles.textInput} />
            </View>
            <View>
              <Text style={styles.cardLabel}>Card Content</Text>
              <TextInput style={styles.multiLineText} multiline={true} />
            </View>
          </View>
          <View style={styles.optionsContainer}>
            <Text style={styles.cardLabel}>Select Option</Text>
            <View style={styles.optionView}>
              {optionList.map(option => (
                <OptionItem option={option} onPress={onPressOptionHandler} />
              ))}
            </View>
            <View style={styles.buttonContainer}>
              <Button name="Prev" onPress={prevButtonHandler} />
              <Button name="Next" onPress={onPressButtonHandler} />
              <Button name="next" onPress={nextButtonHandler} />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateCard;
