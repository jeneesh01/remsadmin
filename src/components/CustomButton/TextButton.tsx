import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
  Image,
} from 'react-native';
import React, {memo} from 'react';
import SemiBoldText from '../Text/SemiBoldText';
import BoldText from '../Text/BoldText';
import {colors} from '../../util/constant/colors';
import {images} from '../../util/constant/images';
type props = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  isPositive?: boolean | undefined;
  title: string;
  textStyle?: StyleProp<TextStyle> | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  isPlusIcon?: boolean | undefined;
};
const TextButton = ({
  onPress,
  isPositive,
  title,
  textStyle,
  containerStyle,
  isPlusIcon,
}: props) => {
  return (
    <TouchableOpacity
      hitSlop={{top: 10, right: 10, left: 10, bottom: 10}}
      onPress={onPress}
      style={[
        {
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
          marginTop: 10,
        },
        containerStyle,
      ]}>
      {isPlusIcon && (
        <Image
          source={images.Plus}
          style={{
            tintColor: colors.primary,
            height: 12,
            width: 12,
            marginRight: 10,
          }}
        />
      )}
      {isPositive ? (
        <BoldText style={[{color: colors.primary, fontSize: 14}, textStyle]}>
          {title}
        </BoldText>
      ) : (
        <SemiBoldText style={[{fontSize: 14}, textStyle]}>{title}</SemiBoldText>
      )}
    </TouchableOpacity>
  );
};

export default memo(TextButton);
