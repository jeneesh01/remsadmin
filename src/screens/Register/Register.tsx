import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { memo, useState } from 'react'
import { styles } from './styles'
import { colors } from '../../util/constant/colors'
import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput'
import BoldText from '../../components/Text/BoldText'
import RegularText from '../../components/Text/RegularText'
import SemiBoldText from '../../components/Text/SemiBoldText'
import { CURRENT_HEIGHT } from '../../util/constant/responsive'
import { useNavigation } from '@react-navigation/native'
import { navigationProp } from '../../@types/navigation'
import { images } from '../../util/constant/images'
import { useAppDispatch } from '../../redux/app/store'
import { signUp } from '../../redux/action/auth'
const userTypeData=[{
  id:1,
  user_type:'Buyer'
},
{
  id:2,
  user_type:'Seller',
},
{
  id:3,
  user_type:'Both'
}
]

const Register = () => {
  const [email,setEmail] = useState<string>('');
  const [password,setPassword]= useState<string>('');
  const [Cpassword,setCPassword]= useState<string>('');
  const [name,setName] = useState<string>('');
  const [showPass,setShowPass] = useState<boolean>(false);
  const navigation = useNavigation<navigationProp>();
  const [isShowPopUp,setIsShowPopUp]= useState<boolean>(false);
  const [userType,setUserType]= useState<string>('User Type');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const onEyePress=()=>{
    setShowPass(!showPass)
  }
  const onLoginPress=()=>{
    navigation.navigate('Login')
  }
  const onUserTypePress=(usertype:string)=>{
    setIsShowPopUp(false);
    setUserType(usertype);
  }
  const onSignUPPress=()=>{
    // navigation.reset({
    //   index: 0,
    //   routes: [{name: 'Drawer'}],
    // });
    setIsLoading(true);
    dispatch(
      signUp(
        email,
        password,
        Cpassword,
        name,
        userType,
        success => {
          setIsLoading(false);
          if (success) {
            navigation.reset({
              index: 0,
              routes: [{name: 'Drawer'}],
            });
          }
        },
      ),
    );
  }
  return (
    <LinearGradient
    colors={[colors.primary3,colors.primary]}
    style={styles.container}>
    <SafeAreaView  style={{backgroundColor:colors.primary7,opacity:0}}/>
    <ScrollView showsVerticalScrollIndicator={false} keyboardDismissMode='interactive' keyboardShouldPersistTaps='handled' contentContainerStyle={{flexGrow:1}} >

<TouchableOpacity activeOpacity={1} onPress={()=>setIsShowPopUp(false)}>

<BoldText style={[styles.headerText,{marginTop:CURRENT_HEIGHT*0.1}]}>Create Account</BoldText>
<RegularText style={[styles.headerText,{marginBottom:50,marginTop:-5}]}>to get started now!</RegularText>
<CustomTextInput placeholder='Name' value={name} setValue={setName} /> 

<CustomTextInput placeholder='Email Address' value={email} setValue={setEmail} /> 
<CustomTextInput placeholder='Password' value={password} setValue={setPassword}  secureTextEntry /> 
<CustomTextInput placeholder='Confirm Password' value={Cpassword} setValue={setCPassword} isPasseword secureTextEntry={showPass} onPress={onEyePress}/> 
<View>

<View style={styles.useTypeSelection}>
  <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flex:1}} activeOpacity={1} onPress={()=>setIsShowPopUp(!isShowPopUp)}>
    <SemiBoldText style={{color:colors.white}}>{userType}</SemiBoldText>
    <Image source={images.Arrow}  style={{height:16,width:16,tintColor:colors.grey,transform:[{rotate:isShowPopUp?'90deg':'-90deg'}]}}/>
  </TouchableOpacity>
  
</View>
{
  isShowPopUp && <View style={{position:'absolute',top:60,zIndex:50,borderRadius:10,borderColor:colors.primary2,backgroundColor:colors.white,width:200,paddingHorizontal:10,alignItems:'center',left:20}}>
    {
      userTypeData.map((item:any,index:number)=>(
<>

    <TouchableOpacity  style={{padding:10,marginVertical:5,paddingHorizontal:50}} onPress={()=>onUserTypePress(item?.user_type)}>
      <SemiBoldText>{item?.user_type}</SemiBoldText>
    </TouchableOpacity>
    {
      index!=2 && 
    <View style={{height:1,backgroundColor:colors.DarkBgColor,width:180}}/>
    }
</>

      ))
    }
    
  </View>
}
<CustomButton title='Sign Up' viewStyle={{marginTop:30}} isLoading={isLoading} onPress={onSignUPPress} /> 

</View>
</TouchableOpacity>


<View
  style={styles.bottomMainContainer}>
  <TouchableOpacity
   activeOpacity={1}
   hitSlop={{top:10,right:10,bottom:10,left:10}}
   onPress={onLoginPress}
    style={styles.bottomContainer}>
  <SemiBoldText>Already have an account?</SemiBoldText>
  <BoldText style={{color:colors.white,marginLeft:5}}>Login Now</BoldText>
  </TouchableOpacity>
</View>

</ScrollView>
  </LinearGradient>
  )
}

export default memo(Register)