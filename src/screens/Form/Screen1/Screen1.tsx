import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { memo, useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../../@types/navigation';
import { useAppDispatch, useAppSelector } from '../../../redux/app/store';
import { setHeader } from '../../../redux/reducer/formSlice';
import { setCityState } from '../../../redux/reducer/authSlice';
import { styles } from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from '../../../components/CustomImage/ImagePicker';
import { images } from '../../../util/constant/images';
import { colors } from '../../../util/constant/colors';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import HCustomTextInput from '../../../components/CustomTextInput/HCustomTextInput';
import { addPropertyData, emptyProperty } from '../../../redux/action/form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../../components/CustomButton/CustomButton';


const Screen1 = () => {
  const propertyData = useAppSelector((state)=>state.form.propertyDetail);
  console.log("property data",propertyData);
  
  const imageUri = propertyData?.property_images[0] ?? '';
  const [showModal, setShowModal] = useState<boolean>(false);
    const navigation = useNavigation<navigationProp>();
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        dispatch(setHeader(1));
      });
      return unsubscribe;
    }, [navigation]);
    const onCancleButtonPress = () => {
      navigation.goBack();
      dispatch(emptyProperty())
    };
    const dispatch = useAppDispatch();
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          dispatch(setHeader(1));
        });
        return unsubscribe;
      }, [navigation]);
      const onNameChange=(text:string)=>{
        dispatch(addPropertyData('property_name',text))

      }
      const onPTypeChange=(text:string)=>{
        dispatch(addPropertyData('property_type',text))

      }
      const onPriceChange=(text:string)=>{
        dispatch(addPropertyData('price',text))

      } 
           const onSqftChange=(text:string)=>{
        dispatch(addPropertyData('sqft',text))

      }
  return (
    <View style={styles.container}>
       <KeyboardAwareScrollView
        keyboardDismissMode="interactive"
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{paddingBottom: 40, paddingTop: 10,flexGrow:1}}>

      <View style={{alignItems:'center'}}>

      <TouchableOpacity activeOpacity={1} onPress={()=>setShowModal(true)} style={{height:100,width:100,borderWidth:1,borderColor:colors.DarkBgColor,borderRadius:100,alignItems:'center',justifyContent:'center',marginBottom:50}}>
        {
          imageUri.length>0 ?
          <Image source={{uri:imageUri}} style={{height:98,width:98,borderRadius:100}} />:
        <Image source={images.LOGO} style={{height:98,width:98,borderRadius:100}} />
        }
        <View style={{position:'absolute',height:36,width:36,borderRadius:100,borderWidth:2,backgroundColor:colors.DarkBgColor,borderColor:colors.white,alignItems:'center',justifyContent:'center',bottom:0,right:-5}}>

        <Image source={images.EditImageIcon} style={{height:14,width:14}} />
        </View>

      </TouchableOpacity>
      </View>


      <HCustomTextInput placeholder='Property Name' defaultValue={propertyData.property_name} setValue={(text)=>onNameChange(text)} /> 
      <HCustomTextInput placeholder='Property Type' defaultValue={propertyData.property_type} setValue={(text)=>onPTypeChange(text)} /> 
      <HCustomTextInput placeholder='Property Price' defaultValue={propertyData.price} setValue={(text)=>onPriceChange(text)} keyboardType='number-pad' /> 
      <HCustomTextInput placeholder='Property Sqft' defaultValue={propertyData.sqft} setValue={(text)=>onSqftChange(text)} keyboardType='number-pad' /> 
      

      <ImagePicker setShowModal={setShowModal} showModal={showModal} />
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <CustomButton type2 title="Cancel" onPress={onCancleButtonPress} />
          <CustomButton type1 title="Next" onPress={()=>navigation.navigate('Screen2' as never)} />
        </View>
      </View>
      </KeyboardAwareScrollView>

    </View>
  )
}

export default memo(Screen1)