import {
  View,
  Text,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {memo} from 'react';
import {images} from '../../util/constant/images';
import BoldText from '../Text/BoldText';
import {colors} from '../../util/constant/colors';
import {styles} from './styles';
import {SCREEN_WIDTH} from '../../util/constant/responsive';
import SemiBoldText from '../Text/SemiBoldText';
type props = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  isClose?: boolean | undefined;
  headerContainer?: StyleProp<ViewStyle> | undefined;
  title: string;
};
const ModalHeader = ({onPress, isClose, headerContainer, title}: props) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.primary,
          height: 66,
          alignItems: 'center',
          justifyContent: 'center',
          width: SCREEN_WIDTH * 0.85,
          borderColor: colors.primary,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
        headerContainer,
      ]}>
      <BoldText style={{fontSize: 18}}>{title}</BoldText>
    </View>
  );
};

export default memo(ModalHeader);
{
  /* <View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={onDontshowpress}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
              style={{
                flexDirection: 'row',
                padding: 10,
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={isShowAgain ? images.UnCheckBox : images.CheckBox}
                  style={[styles.checkBoxstyle, {marginRight: 5}]}
                />
                <SemiBoldText
                  style={[styles.warningTextstyle, {fontSize: 15}]}
                  children="Don't show again"
                />
              </View>
            </TouchableOpacity>
          </View> */
}
