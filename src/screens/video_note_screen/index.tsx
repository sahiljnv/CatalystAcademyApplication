import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
import VideoPlayer from 'react-native-video-player';
const VideoNote = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.videoContainer}>
        <Text style={styles.videoHeading}>QUARTERBACK</Text>
        <VideoPlayer
          style={styles.videoPlayer}
          video={require('../../data/videoData/test-video.mp4')}
          videoWidth={1600}
          videoHeight={900}
          customStyles={{
            playArrow: styles.playArrow,
          }}
        />
        <Text style={styles.playerName}>JAY ADAM</Text>
      </View>
    </View>
  );
};

export default VideoNote;
