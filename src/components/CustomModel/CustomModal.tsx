import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import React, {memo} from 'react';
import Modal from 'react-native-modal';
import ModalHeader from './ModalHeader';
import {colors} from '../../util/constant/colors';
import {SCREEN_WIDTH} from '../../util/constant/responsive';
type props = {
  showModal: boolean;
  setShowModal: (a: boolean) => void;
  mainContainer?: StyleProp<ViewStyle> | undefined;
  bodyContainer?: StyleProp<ViewStyle> | undefined;
  children: React.ReactNode | undefined;
  onBackGroundPress: ((event: GestureResponderEvent) => void) | undefined;
  headerContainer?: StyleProp<ViewStyle> | undefined;
  title: string;
};
const CustomModal = ({
  showModal,
  setShowModal,
  mainContainer,
  children,
  onBackGroundPress,
  title,
  headerContainer,
  bodyContainer,
}: props) => {
  return (
    <Modal
      backdropTransitionOutTiming={500}
      isVisible={showModal}
      backdropOpacity={0.5}
      style={{margin: 0, paddingHorizontal: 30}}>
      <TouchableOpacity
        activeOpacity={1}
        style={[
          {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          },
          mainContainer,
        ]}
        onPress={onBackGroundPress}>
        <TouchableOpacity activeOpacity={1}>
          <ModalHeader title={title} headerContainer={headerContainer} />
          <View
            style={[
              {
                borderWidth: 1,
                borderColor: colors.primary,
                width: SCREEN_WIDTH * 0.85,
                backgroundColor: colors.white,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              },
              bodyContainer,
            ]}>
            {children}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default memo(CustomModal);
