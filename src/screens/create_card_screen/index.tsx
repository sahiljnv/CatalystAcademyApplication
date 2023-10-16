import {View, Text, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import StageRow from '../../components/stage_component';
import {ListProps, OPTIONS_LIST, STAGE_LIST} from '../../data/data';
import OptionItem from '../../components/option_item_component';
import Button from '../../components/button_component';
const CreateCard = () => {
  const [optionList, setOptionList] = useState<ListProps[]>(OPTIONS_LIST);

  const renderItem = ({item}: {item: ListProps}) => {
    return (
      <OptionItem
        option={item}
        onPress={onPressOptionHandler}
        selected={item.selected}
      />
    );
  };
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
  return (
    <View style={styles.mainContainer}>
      <View style={styles.stageHeaderContainer}>
        <Text style={styles.headingText}>Create Card</Text>
        <StageRow rowNumber={2} listOfStage={STAGE_LIST} />
      </View>
      <View style={styles.formConatainer}>
        <Text style={styles.formHeading}>Card Front</Text>
        <View style={styles.inputConatiner}>
          <Text style={styles.cardLabel}>Card Name</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View>
          <Text style={styles.cardLabel}>Card Name</Text>
          <TextInput style={styles.multiLineText} multiline={true} />
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <Text style={styles.cardLabel}>Select Option</Text>
        <View>
          <FlatList
            data={optionList}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button name="Next" onPress={onPressButtonHandler} />
        </View>
      </View>
    </View>
  );
};

export default CreateCard;
