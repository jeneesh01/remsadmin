import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { memo } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/app/store'
import { colors } from '../../../util/constant/colors';
import { SCREEN_WIDTH } from '../../../util/constant/responsive';
import BoldText from '../../../components/Text/BoldText';
import SemiBoldText from '../../../components/Text/SemiBoldText';
import { formatInIndianSystem } from '../../../services/math/numberConversion';
import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../../@types/navigation';
import { setPropertyData } from '../../../redux/reducer/formSlice';
import { images } from '../../../util/constant/images';
import { IPropertyDetail } from '../../../@types/form';
type props={
    item:IPropertyDetail,
    index:number
}
const Property = ({item,index}:props) => {
    const number= formatInIndianSystem(item.price)
    const navigation= useNavigation<navigationProp>()
    const dispatch= useAppDispatch();
    const onPropertyPress=()=>{
        dispatch(setPropertyData(item));
        navigation.navigate('Property')
    }
    
  return (
    <View key={item?._id+item.property_name}>
        <TouchableOpacity activeOpacity={1} style={styles.container} onPress={onPropertyPress}>
            {item?.property_images[0]?.uri ?
        <Image source={{uri:item?.property_images[0]?.uri}} resizeMode='cover' style={{width:SCREEN_WIDTH*0.3,height:SCREEN_WIDTH*0.3,borderRadius:10}}/>
        :<Image source={images.LOGO} resizeMode='cover' style={{width:SCREEN_WIDTH*0.3,height:SCREEN_WIDTH*0.3,borderRadius:10}}/>
          
        }
            <View style={{flex:1,padding:10,justifyContent:'space-between',marginLeft:5}}>
                <View style={{}}>

                <BoldText style={{fontSize:18}} numberOfLines={2}>{item.property_name}</BoldText>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                    <Image source={images.Location} style={{tintColor:colors.primary,height:14,width:10,marginRight:5}} />
                <SemiBoldText style={{}} numberOfLines={2}>{item.city} , {item.state}</SemiBoldText>
                </View>
                </View>
                <BoldText style={{fontSize:16}}>₹ {number}</BoldText>

            </View>

        </TouchableOpacity>
    </View>
  )
}

export default memo(Property)
export const styles=StyleSheet.create({
    container:{
        marginHorizontal:20,
        backgroundColor:colors.white,
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop:10,
    borderRadius:10,
    padding:10,
    flexDirection:'row'
    }
})