import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import TrendingMovies from '../components/trendingMovies';
import {fetchCatchUpData, fetchTrendingMovies} from '../api/carouselData';
import {styles} from '../theme';
import CatchUpRail from '../components/catchUpRail';
export default function HomeScreen() {
  const [carouselData, setCarouselData] = useState([]);
  const [catchUpData, setCatchUpData] = useState([]);

  useEffect(() => {
    getTrendingMovies();
    getCatchUpData();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    if (data) setCarouselData(data);
  };
  const getCatchUpData = async () => {
    const data = await fetchCatchUpData();
    if (data) setCatchUpData(data);
  };
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={'mb-3'}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4 mt-4">
          {/* <Bars3CenterLeftIcon size="30" strokeWidth={2} color={'white'} /> */}
          <Text className="text-white text-3xl font-bold">
            {' '}
            <Text style={styles.text}>Logix</Text> Movies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color={'white'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView contentContainerStyle={{paddingBottom: 10}}>
        {carouselData.length > 0 && <TrendingMovies data={carouselData} />}
        <CatchUpRail title="Catch Up" data={catchUpData}/>
      </ScrollView>
    </View>
  );
}
