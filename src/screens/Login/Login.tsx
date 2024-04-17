import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { memo, useState } from 'react'
import { styles } from './styles'
import { colors } from '../../util/constant/colors'
import LinearGradient from 'react-native-linear-gradient'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import SemiBoldText from '../../components/Text/SemiBoldText'
import RegularText from '../../components/Text/RegularText'
import BoldText from '../../components/Text/BoldText'
import MediumText from '../../components/Text/MediumText'
import { useNavigation } from '@react-navigation/native'
import { navigationProp } from '../../@types/navigation'
import { CURRENT_HEIGHT } from '../../util/constant/responsive'
import { useAppDispatch } from '../../redux/app/store'
import { signIn, signUp } from '../../redux/action/auth'

const Login = () => {
  const [email,setEmail] = useState<string>('');
  const [password,setPassword]= useState<string>('');
  const [showPass,setShowPass] = useState<boolean>(false);
  const navigation = useNavigation<navigationProp>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
const dispatch = useAppDispatch();
  const onEyePress=()=>{
    setShowPass(!showPass)
  }
  const onfpPress=()=>{
    navigation.navigate('ForgotPassword')

  }
  const onSignUPPress=()=>{
    navigation.navigate('Register')
  }
  const onLoginPress=()=>{
    console.log("1");
    navigation.reset({
      index: 0,
      routes: [{name: 'Drawer'}],
    });
    
    // setIsLoading(true);
    // dispatch(
    //   signIn(
    //     email,
    //     password,
    //     success => {
    //       setIsLoading(false);
    //       if(success){
    //         navigation.navigate('Drawer')

    //       }
    //     },
    //   ),
    // );
  }
  return (
    <LinearGradient
      colors={[colors.primary3,colors.primary]}
      style={styles.container}>
      <SafeAreaView  style={{backgroundColor:colors.primary7,opacity:0}}/>
        <ScrollView showsVerticalScrollIndicator={false} keyboardDismissMode='interactive' keyboardShouldPersistTaps='handled' contentContainerStyle={{flexGrow:1}}>


      <BoldText style={[styles.headerText,{marginTop:CURRENT_HEIGHT*0.1}]}>Welcome,</BoldText>
      <RegularText style={[styles.headerText,{marginBottom:50,marginTop:-5}]}>Glad to see you!</RegularText>
      <CustomTextInput placeholder='Email Address' value={email} setValue={setEmail} /> 
      <CustomTextInput placeholder='Password' value={password} setValue={setPassword} isPasseword secureTextEntry={showPass} onPress={onEyePress}/> 
      {/* <TouchableOpacity style={{}} hitSlop={{top:10,right:10,bottom:10,left:10}} onPress={onfpPress}>
      <SemiBoldText style={styles.forgotPassword}>Forgot Password</SemiBoldText>
      </TouchableOpacity> */}
        
      <CustomButton title='Login' viewStyle={{marginTop:30}} isLoading={isLoading} onPress={onLoginPress}/> 
      <View
        style={styles.bottomMainContainer}>
        <TouchableOpacity
        activeOpacity={1}
        hitSlop={{top:10,right:10,bottom:10,left:10}}
        onPress={onSignUPPress}
          style={styles.bottomContainer}>
        <SemiBoldText>Don't have an account?</SemiBoldText>
        <BoldText style={{color:colors.white,marginLeft:5}}>Sign Up Now</BoldText>
        </TouchableOpacity>
      </View>

      </ScrollView>
      
    </LinearGradient>

  )
}

export default memo(Login)