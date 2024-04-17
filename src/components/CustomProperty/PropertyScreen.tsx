import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { memo } from 'react'
import { colors } from '../../util/constant/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAppSelector } from '../../redux/app/store'
import { SCREEN_WIDTH } from '../../util/constant/responsive'
import { useNavigation } from '@react-navigation/native'
import { navigationProp } from '../../@types/navigation'
import { images } from '../../util/constant/images'
import BoldText from '../Text/BoldText'
import { formatInIndianSystem, formattedPropertyAddress } from '../../services/math/numberConversion'
import SemiBoldText from '../Text/SemiBoldText'

const PropertyScreen = () => {
    const propertyDetail = useAppSelector((state)=>state.form.propertyDetail);
    const number= formatInIndianSystem(propertyDetail.price)
    
    const address = formattedPropertyAddress({
        address: propertyDetail.address,
        city: propertyDetail.city,
        state: propertyDetail.state,
        country: propertyDetail.country,
        zip: propertyDetail.zip
    });
        const navigation = useNavigation<navigationProp>();

  return (
    <ScrollView style={{flexGrow:1,backgroundColor:colors.BackgroundColor,marginHorizontal:10}}>
        <SafeAreaView style={{backgroundColor:colors.BackgroundColor}}/>
        <View style={styles.imagecontainer}>
            <TouchableOpacity activeOpacity={1} style={styles.arrowcontainer} onPress={()=>navigation.goBack()}>
                <Image source={images.LeftArrow} style={{height:14,width:20,tintColor:colors.black}} />
            </TouchableOpacity>
        <Image source={{uri:propertyDetail.property_images[0].uri}} resizeMode='contain' style={{width:SCREEN_WIDTH-30,height:SCREEN_WIDTH-10,borderRadius:20,}}/>

        </View>
        <View style={styles.detailContainer}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

            <BoldText style={{fontSize:20}} numberOfLines={2}>{propertyDetail.property_name}</BoldText>
            <BoldText style={{fontSize:16,marginTop:0}}>₹ {number}</BoldText>


            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:2}}>
                    <Image source={images.Location} style={{tintColor:colors.primary,height:14,width:10,marginRight:5}} />
                <SemiBoldText style={{fontSize:14}} numberOfLines={3}>{address}</SemiBoldText>
                </View>
                <SemiBoldText style={{fontSize:16,marginTop:5}}>Sqrt: {propertyDetail.sqft} </SemiBoldText>
                <SemiBoldText style={{fontSize:16,color:colors.black}} numberOfLines={2}>Property Type: {propertyDetail.property_type}</SemiBoldText>


        </View>
    </ScrollView>
  )
}

export default memo(PropertyScreen)
export const styles=StyleSheet.create({
    arrowcontainer:{
        height:40,width:40,backgroundColor:colors.white,borderRadius:20,alignItems:'center',justifyContent:'center',position:'absolute',zIndex:10,left:20,top:20, elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderColor:colors.primary
    
    },
    imagecontainer:{
        shadowColor: colors.black,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation:3,
    alignItems:'center',
    justifyContent:'center',
    height:SCREEN_WIDTH,

    backgroundColor:colors.DrawerHeader,
    borderRadius:20


    },
    detailContainer:{
        shadowColor: colors.black,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation:3,
    backgroundColor:colors.DrawerHeader,
    borderRadius:20,
    padding:20,
    marginTop:10
    }
})

