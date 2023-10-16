import {useRoute} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Video from 'react-native-video';

const PlayerScreen = () => {
  const {params} = useRoute();
  const [clicked, setClicked] = useState(false);
  const [paused, setPaused] = useState(false);

  const onPress = useCallback(() => {
    setClicked(true);
  }, [clicked]);

  const playButtonClicked = useCallback(() => {
    setPaused(!paused);
  }, [paused]);
  return (
    <View className="flex-1">
      <TouchableOpacity onPress={onPress}>
        <Video
          source={{
            uri: params.playbackUrl,
          }}
          paused={paused}
          // Can be a URL or a local file.
          //    ref={(ref) => {
          //      this.player = ref
          //    }}                                      // Store reference
          //    onBuffer={this.onBuffer}                // Callback when remote video is buffering
          //    onError={this.videoError}               // Callback when video cannot be loaded
          style={{width: '100%', height: 200}}
          resizeMode="contain"
        />
        {clicked && (
          <TouchableOpacity
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View className="flex-row">
              <TouchableOpacity>
                <Image
                  source={require('../assets/images/backward.png')}
                  style={{width: 34, height: 34, tintColor: 'white'}}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={playButtonClicked}>
                <Image
                  source={
                    paused
                      ? require('../assets/images/play-button.png')
                      : require('../assets/images/pause.png')
                  }
                  style={{
                    width: 34,
                    height: 34,
                    marginLeft: 50,
                    marginRight: 50,
                    tintColor: 'white',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/images/forward.png')}
                  style={{width: 34, height: 34, tintColor: 'white'}}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PlayerScreen;
