import {View, Text, GestureResponderEvent} from 'react-native';
import React, {memo} from 'react';
import CustomModal from '../../components/CustomModel/CustomModal';
import SemiBoldText from '../../components/Text/SemiBoldText';
import TextButton from '../CustomButton/TextButton';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import HCustomTextInput from '../CustomTextInput/HCustomTextInputs';
import {colors} from '../../util/constant/colors';
import HCustomTextInputs from '../CustomTextInput/HCustomTextInputs';
type props = {
  removeTModal: boolean;
  setRemoveTModal: (a: boolean) => void;
  onSubmitPress?: ((event: GestureResponderEvent) => void) | undefined;
  headerTitle: string;
  bodyText: string;
  reason: string;
  setReason: (a: string) => void;
};
const RemoveModal = ({
  removeTModal,
  setRemoveTModal,
  onSubmitPress,
  headerTitle,
  bodyText,
  reason,
  setReason,
}: props) => {
  return (
    <CustomModal
      showModal={removeTModal}
      setShowModal={setRemoveTModal}
      title={headerTitle}
      onBackGroundPress={() => setRemoveTModal(false)}>
      <View>
        <View style={{margin: 10}}>
          <SemiBoldText
            style={{marginHorizontal: 20, marginTop: 10, fontSize: 16}}>
            {bodyText}
          </SemiBoldText>
        </View>
        <HCustomTextInputs
          value={reason}
          defaultValue={reason}
          setValue={setReason}
          placeholder={''}
        />
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'flex-end',
            padding: 10,
            marginHorizontal: 20,
            marginBottom: -10,
          }}>
          <TextButton title="Cancel" onPress={() => setRemoveTModal(false)} />
          <TextButton title="Submit" isPositive onPress={onSubmitPress} />
        </View>
      </View>
    </CustomModal>
  );
};

export default memo(RemoveModal);
