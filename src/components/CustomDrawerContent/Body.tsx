import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {memo, useState} from 'react';
import {styles} from './styles';
import {images} from '../../util/constant/images';
import {colors} from '../../util/constant/colors';
import SemiBoldText from '../Text/SemiBoldText';
import {data} from './data';
import {useNavigation} from '@react-navigation/native';
import {navigationProp} from '../../@types/navigation';
import { useAppDispatch, useAppSelector } from '../../redux/app/store';
import { setDrawerIndex } from '../../redux/reducer/authSlice';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../../navigation/Drawer/Drawer';

const Body = () => {
  const drawerIndex= useAppSelector((state)=>state.auth?.drawerIndex);
  const navigation = useNavigation<navigationProp>();
  const disptach = useAppDispatch()
;
  const onDrawerScreenPress = (id: number) => {
    if (id === drawerIndex) {
      
            return;
    }

    // setIsSelected(id);
    if (id == 1) {
      disptach(setDrawerIndex(1))
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    } else if (id == 2) {
      disptach(setDrawerIndex(2))

      navigation.navigate('Settings');
    } else if (id == 3) {
      disptach(setDrawerIndex(3))

      // navigation.navigate('About');
    } 
  };

  return (
    <View style={styles.bodyContainer}>
      {data.map((item: any, index: number) => (
        <TouchableOpacity
          key={item.id}
          style={{
            flexDirection: 'row',
            paddingHorizontal: 25,
            padding: 10,
            alignItems:'center'
          }}
          onPress={() => onDrawerScreenPress(item.id)}>
          <View
            style={{
              height: 30,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={item.image}
              style={{
                tintColor:
                drawerIndex == item.id ? colors.primary : colors.black,
                height: item.height,
                width: item.width,
              }}
            />
          </View>

          <SemiBoldText
            style={{
              color: drawerIndex == item.id ? colors.primary : colors.black,
              marginLeft: 25,
              fontSize:14
            }}>
            {item.name}
          </SemiBoldText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default memo(Body);
