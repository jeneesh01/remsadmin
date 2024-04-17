import {
  View,
  Text,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {memo} from 'react';
import {images} from '../../util/constant/images';
import SemiBoldText from '../Text/SemiBoldText';
import {SCREEN_WIDTH} from '../../util/constant/responsive';
import {useNavigation} from '@react-navigation/native';
import {navigationProp} from '../../@types/navigation';
import { colors } from '../../util/constant/colors';
type props = {
  title: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  container?: StyleProp<ViewStyle> | undefined;
};
const CustomHeader = ({title, onPress, container}: props) => {
  const navigaiton = useNavigation<navigationProp>();
  const onLeftArrowPress = () => {
    navigaiton.goBack();
  };
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 30,
          paddingVertical: 30,
          justifyContent:'center',
          backgroundColor:colors.DrawerHeader
        },
        container,
      ]}>
      <TouchableOpacity
        hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
        onPress={onPress ? onPress : onLeftArrowPress}>
        <Image source={images.LeftArrow} style={{height: 16, width: 20}} />
      </TouchableOpacity>
      <View
        style={{
          flex:1,
          marginRight:50
        }}>
        <SemiBoldText style={{textAlign: 'center',fontSize:20}}>
          {title}
        </SemiBoldText>
      </View>
    </View>
  );
};

export default memo(CustomHeader);
