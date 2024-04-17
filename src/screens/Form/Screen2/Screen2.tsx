import { useNavigation } from '@react-navigation/native';
import React, { memo, useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { navigationProp } from '../../../@types/navigation';
import CustomButton from '../../../components/CustomButton/CustomButton';
import HCustomTextInput from '../../../components/CustomTextInput/HCustomTextInput';
import { addProperty, addPropertyData } from '../../../redux/action/form';
import { useAppDispatch, useAppSelector } from '../../../redux/app/store';
import { setCityState } from '../../../redux/reducer/authSlice';
import { setHeader } from '../../../redux/reducer/formSlice';
import { styles } from './styles';
import { View } from 'react-native';
import CustomCS from '../../../components/CustomCS/CustomCS';

const Screen2 = () => {
  const propertyData = useAppSelector((state)=>state.form.propertyDetail);

  const cityG = useAppSelector(state => state.auth?.city);
  const stateG = useAppSelector(state => state.auth?.states);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectState, setSelectState] = useState<string>('');
  const [isCitySelected, setIsCitySelected] = useState<boolean>(
    cityG ? true : false,
  );
  const [isSubmitedd, setisSubmitedd] = useState<boolean>(false);
  useEffect(() => {
    setSelectedCity(cityG ? cityG : '');
    setSelectState(stateG ? stateG : '');
    setIsCitySelected(cityG ? true : false);
  }, [cityG]);
  useEffect(() => {
    dispatch(setCityState({city: '', states: ''}));
  }, []);
const onSubmitPress=()=>{
  
  dispatch(
    addProperty(propertyData,success=>{
      if(success){
        navigation.navigate('Completed')

      }else{
        navigation.reset({
          index: 0,
          routes: [{name: 'Drawer'}],
        });
      }
    })
  )
}
    const navigation = useNavigation<navigationProp>();
    const dispatch = useAppDispatch();
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          dispatch(setHeader(2));
        });
        return unsubscribe;
      }, [navigation]);
      const onAddressChange=(text:string)=>{
        dispatch(addPropertyData('address',text))

      }
      const onPincodeChange=(text:string)=>{
        dispatch(addPropertyData('zip',text))

      }
  return (
    <View style={styles.container}>
 <KeyboardAwareScrollView
        keyboardDismissMode="interactive"
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{paddingBottom: 40, paddingTop: 50,flexGrow:1,}}>


      <HCustomTextInput placeholder='Address' defaultValue={propertyData.address} setValue={(text)=>onAddressChange(text)} /> 
      <CustomCS
          selectState={selectState}
          selectedCity={selectedCity}
          propertyData={propertyData}
        />
      <HCustomTextInput placeholder='Pincode' defaultValue={propertyData.zip} setValue={(text)=>onPincodeChange(text)} keyboardType='number-pad' /> 
      

      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <CustomButton type2 title="Back" onPress={()=>navigation.goBack()} />
          <CustomButton type1 title="Submit" onPress={onSubmitPress} />
        </View>
      </View>
      </KeyboardAwareScrollView>   
       </View>
  )
}

export default memo(Screen2)

function onsuccess(arg0: () => void): any {
  throw new Error('Function not implemented.');
}
