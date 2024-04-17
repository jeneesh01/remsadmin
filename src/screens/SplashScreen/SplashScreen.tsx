import {View, Text, Image, SafeAreaView} from 'react-native';
import React, {memo, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../util/constant/colors';
import {images} from '../../util/constant/images';
import { SCREEN_WIDTH} from '../../util/constant/responsive';
import {useAppDispatch, useAppSelector} from '../../redux/app/store';
import {useNavigation} from '@react-navigation/native';
import {navigationProp} from '../../@types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IS_LOGIN, getStorageData } from '../../services/storageHandler/storageHandler';
import { getPropertiesData } from '../../redux/action/form';
import BoldText from '../../components/Text/BoldText';
import { getUserData } from '../../redux/action/auth';

const SplashScreen = () => {
  const navigation = useNavigation<navigationProp>();
  const dispatch = useAppDispatch();
  const getInfo = async () => {
    const isLogin = await getStorageData(IS_LOGIN)
    if (isLogin) {
      dispatch(getPropertiesData())
      dispatch(getUserData())

      navigation.reset({
        index: 0,
        routes: [{name: 'Drawer'}],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'Auth'}],
      });
    }
  };
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <View style={{flex:1,backgroundColor:colors.white,alignItems:'center',justifyContent:'center',marginBottom:50}}>
      <SafeAreaView style={{backgroundColor:colors.white}} />
      <Image source={images.LOGO} style={{height:SCREEN_WIDTH/1.5,width:SCREEN_WIDTH/1.5}} resizeMode='contain'/>
    </View>
  );
};

export default memo(SplashScreen);
