import {View, Text, Pressable, Button} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import AudioIcon from 'react-native-vector-icons/FontAwesome5';
import {WHITE_COLOR} from '../../style/globel_style_color';
import Sound from 'react-native-sound';
const AudioNote = () => {
  const [isPlay, setPlay] = useState(false);
  let sampleSound: Sound;
  const audioButtonHandler = () => {
    setPlay(!isPlay);
    if (!isPlay) {
      sampleSound.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
      console.log('play====>');
    } else {
      sampleSound.pause();
      console.log('pause=====>');
    }
  };
  const playSound = () => {
    sampleSound = new Sound('sample.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        // } else if (isPlay) {
        //   sampleSound.play(success => {
        //     if (success) {
        //       console.log('successfully finished playing');
        //     } else {
        //       console.log('playback failed due to audio decoding errors');
        //     }
        //   });
        // } else if (!isPlay) {
        //   sampleSound.pause();
        //   console.log('pause=====>');
        //   sampleSound.release();
        // }
      }
    });
    // console.log(
    //   'duration in seconds: ' +
    //     sampleSound.getDuration() +
    //     'number of channels: ' +
    //     sampleSound.getNumberOfChannels(),
    // );

    // if (isPlay) {
    //   sampleSound.play(success => {
    //     if (success) {
    //       console.log('successfully finished playing');
    //     } else {
    //       console.log('playback failed due to audio decoding errors');
    //     }
    //   });
    //   console.log('play=====>');
    // } else {
    //   sampleSound.pause();
    //   console.log('pause=====>');
    // }
  };
  const pauseHandler = () => {
    sampleSound.pause();
  };
  playSound();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.audioContainer}>
        <Text style={styles.audioHeading}>QUARTERBACK</Text>
        <View>
          <View style={styles.playButtonContainer}>
            <Pressable onPress={audioButtonHandler}>
              <AudioIcon
                name={isPlay ? 'pause' : 'play'}
                color={WHITE_COLOR}
                size={25}
              />
            </Pressable>
          </View>
          <Button title="stop" onPress={pauseHandler} />
        </View>
        <Text style={styles.playerName}>JAY ADAM</Text>
      </View>
    </View>
  );
};

export default AudioNote;
