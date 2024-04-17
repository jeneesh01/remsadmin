import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageStyle,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import React, {memo} from 'react';
import {images} from '../../util/constant/images';
import {size} from 'lodash';
import {colors} from '../../util/constant/colors';
type props = {
  viewStyle?: StyleProp<ViewStyle> | undefined;
  imageStyle?: StyleProp<ImageStyle> | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};
const HCustomAdd = ({viewStyle, imageStyle, onPress}: props) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.primary,
          height: 60,
          width: 60,
          borderRadius: 100,
        },
        viewStyle,
      ]}>
      <TouchableOpacity
        style={{
          height: 60,
          width: 60,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
        }}
        onPress={onPress}>
        <Image
          source={images.Plus}
          style={[{height: 20, width: 20, tintColor: colors.white}, imageStyle]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(HCustomAdd);
