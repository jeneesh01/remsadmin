import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../@types/navigation';
import { colors } from '../../util/constant/colors';
import { images } from '../../util/constant/images';
import { SCREEN_WIDTH } from '../../util/constant/responsive';
import SemiBoldText from '../Text/SemiBoldText';
import { IPropertyDetail } from '../../@types/form';
import HCustomTextInput from '../CustomTextInput/HCustomTextInput';


type props = {
  selectState: string;
  selectedCity: string;
  propertyData:IPropertyDetail
};

const CustomCS = ({ selectedCity, selectState,propertyData}: props) => {
  const navigation = useNavigation<navigationProp>();
  const onSelectCityPress = () => {
    navigation.navigate('CitySelection');
  };

  return (
    <View>
      <TouchableOpacity
        hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
        onPress={onSelectCityPress}
        style={{
          marginHorizontal: 25,
          marginBottom:  30,
          marginTop:10
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <SemiBoldText
            style={{color: colors.black,fontSize:14}}>
            Select City
          </SemiBoldText>
          <Image
            source={images.Arrow}
            style={{
              tintColor: colors.black,
              height: 13,
              width: 13,
              transform: [{rotate: '180deg'}],
            }}
          />
        </View>
          <TouchableOpacity activeOpacity={1} onPress={onSelectCityPress} style={{ flexDirection:'row',justifyContent: 'space-between',alignItems:'center'}}>
            <View style={styles.textInputContainer}>
              <SemiBoldText style={styles.textInput} numberOfLines={1}>
                {propertyData.city}
              </SemiBoldText>

            </View>
            <View style={styles.textInputContainer}>
              <SemiBoldText style={styles.textInput} numberOfLines={1}>
                {propertyData.state}
              </SemiBoldText>

            </View>

          </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default memo(CustomCS);
export const styles = StyleSheet.create({
  
  textInput:{
    
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    color:colors.black,
    height:50,
    width:SCREEN_WIDTH/3,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',


   

},textInputContainer:{
    height:50,
    backgroundColor:colors.DrawerHeader,
    borderColor:colors.white,
    borderWidth:1,
    padding:15,
    borderRadius:10,
    flexDirection:'row',
    marginBottom:15,
    shadowColor: colors.black,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width:SCREEN_WIDTH/2.5,
    justifyContent:'center'



}
});
