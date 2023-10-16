import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {getImage} from '../api/carouselData';
import {useNavigation} from '@react-navigation/native';

var {width, height} = Dimensions.get('window');
export default function TrendingMovies({data}) {
  const navigation = useNavigation();
  const handleClick = playbackUrl => {
    navigation.navigate('Player', {playbackUrl});
  };
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">Live Channels</Text>
      <Carousel
        data={data}
        renderItem={item => <MovieCard item={item} handleClick={handleClick} />}
        firstItem={0}
        inActiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width}
        slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  );
}

// export default Carousel;

const MovieCard = ({item, handleClick}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handleClick(item?.item?.video_url);
      }}>
      {item?.item?.thumbnail_urls?.[2]?.['1920x1080'] !== '' ? (
        <Image
          source={{uri: item?.item?.thumbnail_urls?.[2]?.['1920x1080']}}
          style={{width: width*0.9, height: height * 0.3,resizeMode:'stretch'}}
          className="rounded-2xl"
        />
      ) : null}
    </TouchableOpacity>
  );
};
