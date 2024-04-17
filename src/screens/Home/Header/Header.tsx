import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../../../util/constant/colors';
import {images} from '../../../util/constant/images';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import { DrawerParamList } from '../../../navigation/Drawer/Drawer';
import SemiBoldText from '../../../components/Text/SemiBoldText';
import BoldText from '../../../components/Text/BoldText';
type DrawerPRops = DrawerNavigationProp<DrawerParamList>;
const Header = () => {
  const navigation = useNavigation<DrawerPRops>();
  const onDrawerIconPress = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  };
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          marginHorizontal: 15,
        }}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        onPress={onDrawerIconPress}>
        <Image
          source={images.DrawerIcon}
          tintColor={colors.white}
          style={{height: 24, width: 24}}
        />
      </TouchableOpacity>
      <BoldText style={{fontSize:18,marginLeft:10,color:colors.white}}>EstateHub</BoldText>
      {/* <TouchableOpacity
        style={{
          marginLeft:-10
        }}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
        <Image
          source={images.LogoHeader}
          style={{height: 45, width: 200}}
        />
      </TouchableOpacity> */}
    </View>
  );
};

export default memo(Header);
