import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {colors} from '../../util/constant/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch, useAppSelector} from '../../redux/app/store';
import {SCREEN_WIDTH} from '../../util/constant/responsive';
import {useNavigation} from '@react-navigation/native';
import {navigationProp} from '../../@types/navigation';
import {images} from '../../util/constant/images';
import BoldText from '../Text/BoldText';
import {
  formatInIndianSystem,
  formattedPropertyAddress,
} from '../../services/math/numberConversion';
import SemiBoldText from '../Text/SemiBoldText';
import FastImage from 'react-native-fast-image';
import {imagePath} from '../../services/math/imagePath';
import CustomButton from '../CustomButton/CustomButton';
import RemoveModal from '../RemoveModal/RemoveModal';
import {verificationProperty} from '../../redux/action/form';

const PropertyScreen = () => {
  const [removeTModal, setRemoveTModal] = useState<boolean>(false);
  const [reason, setIsReason] = useState<string>('');

  const propertyDetails = useAppSelector(state => state.form.propertyDetail);
  console.log('This ipr', propertyDetails);

  const [uriImage, setUriImage] = useState<string>('');
  useEffect(() => {
    const imageUriset = async () => {
      console.log('123');

      const dos = await imagePath(propertyDetails?.property_images);
      console.log('222', dos);

      setUriImage(dos);
    };
    imageUriset();
  }, []);
  const number = formatInIndianSystem(propertyDetails?.price);
  const dispatch = useAppDispatch();
  const address = formattedPropertyAddress({
    address: propertyDetails?.address,
    city: propertyDetails?.city,
    state: propertyDetails?.state,
    country: propertyDetails?.country,
    zip: propertyDetails?.zip,
  });
  const navigation = useNavigation<navigationProp>();
  const onRejectPress = () => {
    setRemoveTModal(true);
  };
  const onAcceptedPress = () => {
    const id = propertyDetails?.id;
    const body = {
      property_state: 'accepted',
    };
    dispatch(verificationProperty(body, id));
  };
  const onRemoveSumbitPress = () => {
    const id = propertyDetails?.id;
    const body = {
      property_state: 'rejected',
      property_reason: reason,
    };
    dispatch(verificationProperty(body, id));
    setRemoveTModal(false);
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: colors.BackgroundColor,
        marginHorizontal: 10,
        paddingBottom: 40,
      }}>
      <SafeAreaView style={{backgroundColor: colors.BackgroundColor}} />
      <View style={styles.imagecontainer}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.arrowcontainer}
          onPress={() => navigation.goBack()}>
          <Image
            source={images.LeftArrow}
            style={{height: 14, width: 20, tintColor: colors.black}}
          />
        </TouchableOpacity>
        <Image
          source={{uri: uriImage}}
          resizeMode="contain"
          style={{
            width: SCREEN_WIDTH - 30,
            height: SCREEN_WIDTH - 10,
            borderRadius: 20,
          }}
        />
        <View
          style={{
            position: 'absolute',
            zIndex: 100,
            right: 25,
            bottom: 25,
            elevation: 3,
            shadowColor: colors.black,
            shadowOffset: {height: 1, width: 0},
            shadowOpacity: 0.2,
            shadowRadius: 3,
            backgroundColor: colors.white,
            borderRadius: 5,
          }}>
          <SemiBoldText
            style={{
              color: colors.black,
              padding: 5,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}>
            {propertyDetails?.property_type}
          </SemiBoldText>
        </View>
      </View>
      <View style={styles.detailContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <BoldText style={{fontSize: 20}} numberOfLines={2}>
            {propertyDetails?.property_name}
          </BoldText>
          <BoldText style={{fontSize: 16, marginTop: 0}}>₹ {number}</BoldText>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 2}}>
          <Image
            source={images.Location}
            style={{
              tintColor: colors.primary,
              height: 14,
              width: 10,
              marginRight: 5,
            }}
          />
          <SemiBoldText style={{fontSize: 14}} numberOfLines={3}>
            {address}
          </SemiBoldText>
        </View>
        <SemiBoldText style={{fontSize: 16, marginTop: 5}}>
          {propertyDetails?.sqft} .sqft
        </SemiBoldText>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <CustomButton type2 title="Reject" onPress={onRejectPress} />
          <CustomButton type1 title="Accept" onPress={onAcceptedPress} />
        </View>
      </View>
      <RemoveModal
        removeTModal={removeTModal}
        setRemoveTModal={setRemoveTModal}
        onSubmitPress={onRemoveSumbitPress}
        headerTitle="Reason"
        bodyText="Please state your reason for rejecting property?"
        reason={reason}
        setReason={setIsReason}
      />
    </ScrollView>
  );
};

export default memo(PropertyScreen);
export const styles = StyleSheet.create({
  arrowcontainer: {
    height: 40,
    width: 40,
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10,
    left: 20,
    top: 20,
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderColor: colors.primary,
  },
  imagecontainer: {
    shadowColor: colors.black,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: SCREEN_WIDTH,

    backgroundColor: colors.DrawerHeader,
    borderRadius: 20,
  },
  detailContainer: {
    shadowColor: colors.black,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: colors.DrawerHeader,
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
    marginTop: 40,
  },
});
