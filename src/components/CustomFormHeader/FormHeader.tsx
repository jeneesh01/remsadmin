import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React, {memo} from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import { colors } from '../../util/constant/colors';
import SemiBoldText from '../Text/SemiBoldText';
import { images } from '../../util/constant/images';
import { CURRENT_HEIGHT, SCREEN_WIDTH } from '../../util/constant/responsive';

type props = {
  containerStyle?: StyleProp<ViewStyle> | undefined;
  type?: number | undefined;
  textStyle?: StyleProp<TextStyle> | undefined;
  onLongPress?: ((event: GestureResponderEvent) => void) | undefined;
};
const percentage = 66;
const FormHeader = ({containerStyle, type, textStyle, onLongPress}: props) => {
  return (
    <TouchableOpacity onLongPress={onLongPress} activeOpacity={1}>
      {type == 1 && (
        <View style={[styles.circularContainer, containerStyle]}>
          <AnimatedCircularProgress
            size={74}
            width={3}
            fill={0}
            tintColor={colors.primary}
            backgroundColor={colors.DarkBgColor}
            style={{transform: [{rotate: '-90deg'}]}}
            children={() => (
              <SemiBoldText
                style={{transform: [{rotate: '90deg'}],fontSize:14}}>
                0 of 2
              </SemiBoldText>
            )}
          />
          <SemiBoldText  style={[styles.titleStyle, textStyle]}>
            Property Detail
          </SemiBoldText>
        </View>
      )}
       {type == 2 && (
        <View style={[styles.circularContainer, containerStyle]}>
          <AnimatedCircularProgress
            size={74}
            width={3}
            fill={50}
            tintColor={colors.primary}
            backgroundColor={colors.DarkBgColor}
            style={{transform: [{rotate: '-90deg'}]}}
            children={() => (
              <SemiBoldText
                style={{transform: [{rotate: '90deg'}],fontSize:14}}>
                1 of 2
              </SemiBoldText>
            )}
          />
          <SemiBoldText  style={[styles.titleStyle, textStyle]}>
            Property Detail
          </SemiBoldText>
        </View>
      )}
{type == 3 && (
        <View
          style={[
            { alignItems: 'center', marginHorizontal: 20,marginTop:CURRENT_HEIGHT*0.3,justifyContent:'center'},
            containerStyle,
          ]}>
          <AnimatedCircularProgress
            size={74}
            width={3}
            fill={100}
            tintColor={colors.primary}
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor={colors.DarkBgColor}
            style={{transform: [{rotate: '-90deg'}]}}
            children={() => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image style={styles.completeImage} source={images.Completed} />
              </View>
            )}
          />

          <SemiBoldText style={[styles.titleStyle, textStyle,{marginTop:10,marginLeft:0}]}>
             Completed
          </SemiBoldText>
        </View>
      )}
     
    </TouchableOpacity>
  );
};

export default memo(FormHeader);
export const styles = StyleSheet.create({
  circularContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 30,
    marginBottom: 40,
  },
  titleStyle: {
    marginLeft: 25,
    fontSize:24
  },
  completeImage: {
    height: 24,
    width: 24,
    tintColor: colors.primary,
    transform: [{rotate: '90deg'}],
  },
});
