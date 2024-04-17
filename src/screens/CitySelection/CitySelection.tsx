import React, {memo, useEffect, useState} from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import data from '../../assets/data/mainData/cityState.json';
import SemiBoldText from '../../components/Text/SemiBoldText';
import {colors} from '../../util/constant/colors';
import {images} from '../../util/constant/images';
import {SCREEN_WIDTH} from '../../util/constant/responsive';
import {styles} from './styles';
import {useAppDispatch} from '../../redux/app/store';
import {useNavigation} from '@react-navigation/native';
import {navigationProp} from '../../@types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import CustomSearch from '../../components/CustomSearch/CustomSearch';
import { setCityState } from '../../redux/reducer/authSlice';
import { addPropertyData } from '../../redux/action/form';

const CitySelection = () => {
  const [serachValue, setSerachValue] = useState<string>('');
  const [recentData, setRecentData] = useState<any>();
  const [searchResult, setSearchResult] = useState<
    {city: string; state: string}[]
  >([]);
  const navigation = useNavigation<navigationProp>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    getRecentData();
  }, []);
  const getRecentData = async () => {
    const recentDataa = await AsyncStorage.getItem('recent_search');
    const recentValue = recentDataa ? JSON.parse(recentDataa) : [];
    setRecentData(recentValue);
  };
  const handleSearch = (text: string) => {
    if (text.length > 2) {
      const searchInput = text.trim().toLowerCase();

      const filteredCities = Object.entries(data)
        .flatMap(([state, cities]) => cities.map(city => ({city, state})))
        .filter(({city}) => city.toLowerCase().includes(searchInput));
      setSearchResult(filteredCities);
    } else {
      setSearchResult([]);
    }
  };

  useEffect(() => {
    handleSearch(serachValue);
  }, [serachValue]);
  const onCopyPress = (state: string) => {
    setSerachValue(state);
  };
  const onCityStatePress = (city: string, state: string) => {
    Keyboard.dismiss();
    dispatch(addPropertyData('city',city));
    dispatch(addPropertyData('state',state));
    dispatch(setCityState({city: city, states: state}));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: colors.BackgroundColor}} />
      <CustomHeader title="Select City" />
      <CustomSearch value={serachValue} onValueChange={setSerachValue} />
      {serachValue.length == 0 && recentData && recentData?.length > 0 ? (
        <View style={{marginHorizontal: 30, marginTop: 10}}>
          <SemiBoldText style={{fontSize:14}}>
            Recent
          </SemiBoldText>
          {recentData?.map((item: any, index: number) => (
            <View
              key={index + item?.city + item?.state}
              style={{
                flexDirection: 'row',
                marginTop: 15,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: SCREEN_WIDTH / 2,
                }}
                onPress={() => onCityStatePress(item?.city, item?.state)}>
                <Image
                  source={images.Recent}
                  style={{height: 14, width: 14, tintColor: colors.black7}}
                />
                <View
                  style={{
                    flex: 1,
                    marginLeft: 20,
                    flexDirection: 'row',
                    width: 100,
                    maxWidth: SCREEN_WIDTH / 2.5,
                  }}>
                  <SemiBoldText style={{fontSize:18}} numberOfLines={1}>
                    {item.city}
                  </SemiBoldText>
                  <SemiBoldText style={{fontSize:18}} >
                    {' '}
                    ,{' '}
                  </SemiBoldText>
                  <SemiBoldText  style={{fontSize:18}} numberOfLines={1}>
                    {item.state}
                  </SemiBoldText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
                onPress={() => onCopyPress(item.city)}>
                <Image
                  source={images.SearchHealper}
                  style={{height: 12, width: 12, tintColor: colors.black7}}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : (
        <ScrollView
          style={{marginHorizontal: 30, marginTop: 10}}
          keyboardShouldPersistTaps={'handled'}
          keyboardDismissMode="interactive"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 30}}>
          {searchResult?.length == 0 && serachValue.length != 0 ? (
            <View style={{alignItems: 'center', marginTop: 10}}>
              <SemiBoldText  style={{color: colors.black7,fontSize:18}}>
                Please Refine Your Search
              </SemiBoldText>
            </View>
          ) : (
            searchResult?.map((item: any, index: number) => (
              <View
                key={index + item?.city}
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: SCREEN_WIDTH - 75,
                  }}
                  onPress={() => onCityStatePress(item?.city, item?.state)}>
                  <Image
                    source={images.Search}
                    style={{height: 14, width: 14, tintColor: colors.black7}}
                  />
                  <View style={{marginLeft: 20, flexDirection: 'row'}}>
                    <SemiBoldText style={{fontSize:18}}>{item?.city}</SemiBoldText>
                    <SemiBoldText style={{fontSize:18}} >
                      {' '}
                      ,{' '}
                    </SemiBoldText>
                    <SemiBoldText style={{fontSize:18}}>{item?.state}</SemiBoldText>
                  </View>
                </TouchableOpacity>
              </View>
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default memo(CitySelection);
