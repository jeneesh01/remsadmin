import {
  View,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React, {memo} from 'react';
import {ImageSourcePropType} from 'react-native';
import {colors} from '../../util/constant/colors';
import {
  SCREEN_WIDTH,
  SIZE_05,
  SIZE_10,
  SIZE_14,
  SIZE_16,
  SIZE_18,
  SIZE_20,
  SIZE_22,
  SIZE_24,
} from '../../util/constant/responsive';
import SemiBoldText from '../Text/SemiBoldText';
import {images} from '../../util/constant/images';
import {styles} from './styles';
import BoldText from '../Text/BoldText';
type props = {
  title: string;
  textStyle?: StyleProp<TextStyle> | undefined;
  viewStyle?: StyleProp<ViewStyle> | undefined;
  addIcon?: ImageSourcePropType | undefined;
  isLoading?: boolean | undefined;
  type1?: boolean | undefined;
  type2?: boolean | undefined;
  type3?: boolean | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
};
const CustomButton = ({
  title,
  textStyle,
  viewStyle,
  addIcon,
  isLoading,
  type1,
  type2,
  type3,
  onPress,
  containerStyle,
}: props) => {
  const buttonTextWidth = title.length * SCREEN_WIDTH * 0.038;

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      activeOpacity={1}>

        {
          !type1 && !type2 && !type3 && (
            <View style={[{height:50,backgroundColor:colors.white,elevation:3,shadowColor:colors.black, shadowOffset: {height: 1, width: 0},
              shadowOpacity: 0.2,
              shadowRadius: 3,
              marginHorizontal:20,borderRadius:10,
              alignItems:'center',justifyContent:'center'},viewStyle]}>
                <BoldText style={{fontSize:16}}>{title}</BoldText>
              
            </View>
          )
        }
      {type3 && (
        <View
          style={[
            {
              minWidth: SCREEN_WIDTH * 0.3,
              minHeight: SCREEN_WIDTH * 0.1,
              backgroundColor: colors.primary,
              borderRadius: 100,
              height: 35,
              alignItems: 'center',
              justifyContent: 'center',
              width: buttonTextWidth,
            },
            viewStyle,
          ]}>
          {!isLoading ? (
            <>
              <View
                style={{
                  position: 'absolute',
                  left: SIZE_16,
                }}>
                <Image
                  source={images.Plus}
                  style={{
                    height: SIZE_18,
                    width: SIZE_18,
                    tintColor: colors.white,
                  }}
                />
              </View>

              <SemiBoldText
                style={[
                  {
                    padding: SIZE_10,
                    color: colors.white,
                    paddingLeft: SIZE_22,
                  },
                  textStyle,
                ]}>
                {title}
              </SemiBoldText>
            </>
          ) : (
            <ActivityIndicator color={colors.white} size={SIZE_24} />
          )}
        </View>
      )}
      {type1 && (
        <View style={[styles.type1View, viewStyle]}>
          {!isLoading ? (
            <SemiBoldText style={[styles.type1Text, textStyle]}>
              {title}
            </SemiBoldText>
          ) : (
            <ActivityIndicator color={colors.white} size={SIZE_24} />
          )}
        </View>
      )}
      {type2 && (
        <View style={[styles.type2View, viewStyle]}>
          {!isLoading ? (
            <SemiBoldText style={[styles.type2Text, textStyle]}>
              {title}
            </SemiBoldText>
          ) : (
            <ActivityIndicator color={colors.white} size={SIZE_24} />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default memo(CustomButton);
