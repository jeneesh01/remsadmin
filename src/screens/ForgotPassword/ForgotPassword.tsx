import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { memo, useState } from 'react'
import { colors } from '../../util/constant/colors'
import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput'
import BoldText from '../../components/Text/BoldText'
import RegularText from '../../components/Text/RegularText'
import SemiBoldText from '../../components/Text/SemiBoldText'
import { CURRENT_HEIGHT, SCREEN_WIDTH } from '../../util/constant/responsive'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { navigationProp } from '../../@types/navigation'

const ForgotPassword = () => {
  const [email,setEmail] = useState<string>('');
  const navigation = useNavigation<navigationProp>();
  const onfpPress=()=>{
    navigation.navigate('ForgotPassword')

  }
  return (
    <LinearGradient
    colors={[colors.primary3,colors.primary]}
      style={styles.container}>
      <SafeAreaView  style={{backgroundColor:colors.primary7,opacity:0}}/>
        <ScrollView showsVerticalScrollIndicator={false} keyboardDismissMode='interactive' keyboardShouldPersistTaps='handled' contentContainerStyle={{flexGrow:1,justifyContent:'center',marginBottom:SCREEN_WIDTH/2}}>


      <BoldText style={[styles.headerText,{}]}>Forgot Password</BoldText>
      <RegularText style={[styles.headerText,{marginTop:20,marginBottom:50,fontSize:16}]}>Kindly enter Email Address tied to your accout, we would help you reset your password</RegularText>
      <CustomTextInput placeholder='Email Address' value={email} setValue={setEmail} /> 
        
      <CustomButton title='Recover Password' viewStyle={{marginTop:30}}/> 

      </ScrollView>
    </LinearGradient>
  )
}

export default memo(ForgotPassword)

