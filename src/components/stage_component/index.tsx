import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
import {ListProp} from '../../data/data';
import {
  PRIMARY500,
  WHITE_COLOR,
} from '../../style/globel_style_color';
type StageProps = {
  listOfStage: ListProp[];
};
const StageRow = (props: StageProps) => {
  const {listOfStage} = props;
  return (
    <View style={styles.circleContainer}>
      {listOfStage.map(stage => {
        return (
          <View key={stage.id}>
            <View style={styles.circleContainer}>
              <View
                style={[
                  styles.circle,
                  {backgroundColor: stage.selected ? PRIMARY500 : WHITE_COLOR},
                ]}>
                <Text
                  style={[
                    styles.circleNum,
                    {color: stage.selected ? WHITE_COLOR : PRIMARY500},
                  ]}>
                  0{stage.id}
                </Text>
              </View>
              <View style={styles.hrLiseContainer}>
                {listOfStage.length !== stage.id && (
                  <View style={styles.hrLine} />
                )}
              </View>
            </View>

            <Text style={styles.stageName}>{stage.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default StageRow;
