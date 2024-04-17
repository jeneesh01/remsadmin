import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { memo, useState } from 'react'
import { colors } from '../../util/constant/colors'
import CustomHeader from '../../components/CustomHeader/CustomHeader'
import { useNavigation } from '@react-navigation/native'
import { navigationProp } from '../../@types/navigation'
import { useAppDispatch, useAppSelector } from '../../redux/app/store'
import { DrawerParamList } from '../../navigation/Drawer/Drawer'
import { setDrawerIndex } from '../../redux/reducer/authSlice'
import { DrawerActions } from '@react-navigation/native'
import { images } from '../../util/constant/images'
import { SCREEN_WIDTH } from '../../util/constant/responsive'
import Body from './Body'
const Settings = () => {
  const navigation = useNavigation<navigationProp>();
  const userInfo = useAppSelector(state=>state.auth?.userInfo)
  const [showModal, setShowModal] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const onLeftArrowPress=()=>{
    navigation.dispatch(DrawerActions.closeDrawer())
    navigation.goBack();
    dispatch(setDrawerIndex(1));


  }
  return (
    <View style={{flex:1,backgroundColor:colors.BackgroundColor}}>
        <SafeAreaView style={{backgroundColor:colors.DrawerHeader}} />
      <View style={{position:'absolute',backgroundColor:colors.DrawerHeader,width:SCREEN_WIDTH,top:100,padding:80}}/>
        <CustomHeader title='Settings' onPress={onLeftArrowPress}/>
        <View style={{backgroundColor:colors.DrawerHeader,paddingTop:80}}/>


<View style={{alignItems:'center',zIndex:100,marginTop:-20}}>
  
        <TouchableOpacity activeOpacity={1} onPress={()=>setShowModal(true)} style={{height:90,width:90,borderWidth:1,borderColor:colors.DarkBgColor,borderRadius:100,alignItems:'center',justifyContent:'center',marginBottom:50}}>
        <Image source={images.LOGO} style={{height:88,width:88,borderRadius:100}} />
        <View style={{position:'absolute',height:30,width:30,borderRadius:100,borderWidth:2,backgroundColor:colors.DarkBgColor,borderColor:colors.white,alignItems:'center',justifyContent:'center',bottom:0,right:-5}}>

        <Image source={images.EditImageIcon} style={{height:14,width:14}} />

      </View>
      </TouchableOpacity>
</View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1,paddingBottom:50}} >


      <Body />


        </ScrollView>


    </View>
  )
}

export default memo(Settings)