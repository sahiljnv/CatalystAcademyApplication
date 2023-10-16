import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
type StageProps = {
  rowNumber: number;
  listOfStage: Array<string>;
};
const covertNumberToArray = (num: number) => {
  const arr: number[] = [];
  while (num--) {
    arr.push(num + 1);
  }
  return arr.reverse();
};
const StageRow = (props: StageProps) => {
  const {rowNumber, listOfStage} = props;
  const numberOrRow = covertNumberToArray(rowNumber);
  return (
    <View style={styles.circleContainer}>
      {numberOrRow.map(num => {
        return (
          <View key={num}>
            <View style={styles.circleContainer}>
              <View style={styles.circle}>
                <Text style={styles.circleNum}>{num}</Text>
              </View>
              <View style={styles.hrLiseContainer}>
                {numberOrRow.length !== num && <View style={styles.hrLine} />}
              </View>
            </View>

            <Text style={styles.stageName}>{listOfStage[num - 1]}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default StageRow;
