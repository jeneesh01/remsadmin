import { View, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native'
import React, { memo } from 'react'
import BoldText from '../../components/Text/BoldText'
import SemiBoldText from '../../components/Text/SemiBoldText'
import { useAppSelector } from '../../redux/app/store'
import { images } from '../../util/constant/images'
import { SCREEN_WIDTH } from '../../util/constant/responsive'
import { colors } from '../../util/constant/colors'
import { mixpanelTrack } from '../../util/mixpanel'
import * as Sentry from '@sentry/react-native'

const Body = () => {
  const userInfo = useAppSelector(state=>state.auth?.userInfo);
  const onProfilePress=()=>{

  }
const onWhastappPress=()=>{
    console.log("1");
    
    mixpanelTrack('Feedback On WhatsApp');
    let url = 'whatsapp://send?text=' + 'Hi' + '&phone=91' + 9662066441;
    Linking.openURL(url)
      .then(data => {
        console.log('WhatsApp Opened successfully ' + data);
      })
      .catch(() => {
        Sentry.captureMessage('Error in Feedback on WhatsApp');
        console.log('Make sure WhatsApp installed on your device');
      });
}
const onMyPlanPress=()=>{

}
const onPrivacyPolicyPress=()=>{
    mixpanelTrack('Privacy & Policy');

    Linking.openURL(
      'https://codeleapgs.github.io/privacy-policy-and-terms-condition/PrivacyPolicy/skillnavigator.html',
    )
      .then(() => {
        console.log('Link Successfully Opend');
      })
      .catch(() => {
        Sentry.captureMessage('Error in Privacy Policy Link Opening');
      });
}
const onReportRequestPress=()=>{
    mixpanelTrack('Report Issue & Request Feature');

    Linking.openURL('https://airtable.com/appJyDizwnhHgtfzi/shreRAjhOQg4gGNuT')
      .then(() => {
        console.log('Bug Report Link Opend successfully');
      })
      .catch(() => {
        Sentry.captureMessage('Error in BugReport Link Opening');
      });
}
const onDeleteAccountPress=()=>{

}
const onLogOutPress=()=>{

}
  return (
    <View style={{marginHorizontal:25}}>
       <TouchableOpacity
          activeOpacity={1}
            style={styles.profileDetainContainer}
            onPress={onProfilePress}>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <View style={{height:40,width:40,alignItems:'center',justifyContent:'center',marginRight:15}}>

                <Image
                source={images.UserProfile}
                style={{
                  height: 18,
                  width: 20,
                }}
              />
                    </View>



            <View>
              <BoldText style={{fontSize:16}} >

                {userInfo?.name ? userInfo?.name :"Jeneesh S"}
              </BoldText>
              <SemiBoldText
                style={{marginTop: -2,fontSize:16}}>
                  {
                    userInfo?.email ? userInfo?.email :"jeneesh@gmail.com"
                  }
              </SemiBoldText>
            </View>
            </View>

            <View>
              <Image
                source={images.Arrow}
                style={{
                  height: 14,
                  width: 14,
                  transform: [{rotate: '180deg'}],
                }}
              />
            </View>
          </TouchableOpacity>
          <View style={{height:1,backgroundColor:colors.bordercolor,width:SCREEN_WIDTH-60}}/>
          <TouchableOpacity
          activeOpacity={1}
            style={styles.profileDetainContainer}
            onPress={onWhastappPress}>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <View style={{height:40,width:40,alignItems:'center',justifyContent:'center',marginRight:15}}>

                <Image
                source={images.WhatsApp}
                style={{
                  height: 20,
                  width: 20,
                }}
              />
                    </View>



            <View>
              <BoldText style={{fontSize:16}} >
                Connect on WhatsApp

              </BoldText>
            </View>
            </View>

            <View>
              <Image
                source={images.Arrow}
                style={{
                  height: 14,
                  width: 14,
                  transform: [{rotate: '180deg'}],
                }}
              />
            </View>
          </TouchableOpacity>
          <View style={{height:1,backgroundColor:colors.bordercolor,width:SCREEN_WIDTH-60}}/>
          <TouchableOpacity
          activeOpacity={1}
            style={styles.profileDetainContainer}
            onPress={onMyPlanPress}>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <View style={{height:40,width:40,alignItems:'center',justifyContent:'center',marginRight:15}}>

                <Image
                source={images.MyPlan}
                style={{
                  height: 20,
                  width: 20,
                }}
              />
                    </View>



            <View>
              <BoldText style={{fontSize:16}} >
                My Plan

              </BoldText>
            </View>
            </View>

            <View>
              <Image
                source={images.Arrow}
                style={{
                  height: 14,
                  width: 14,
                  transform: [{rotate: '180deg'}],
                }}
              />
            </View>
          </TouchableOpacity>
          <View style={{height:1,backgroundColor:colors.bordercolor,width:SCREEN_WIDTH-60}}/>
          <View>

          <View
            style={styles.profileDetainContainer}
            >
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <View style={{height:40,width:40,alignItems:'center',justifyContent:'center',marginRight:15}}>

                <Image
                source={images.Support}
                style={{
                  height: 20,
                  width: 20,
                }}
              />
                    </View>



            <View>
              <BoldText style={{fontSize:16}} >
                Support

              </BoldText>
            </View>
            </View>
            
          </View>
          <TouchableOpacity
          
          activeOpacity={1}
            style={{marginTop:-10}}
            onPress={onPrivacyPolicyPress}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>



            <View>
              <SemiBoldText style={{fontSize:16,marginLeft:10}} >
                Privacy Policy

              </SemiBoldText>
            </View>

            <View>
              <Image
                source={images.Arrow}
                style={{
                  height: 14,
                  width: 14,
                  transform: [{rotate: '180deg'}],
                }}
              />
            </View>
            </View>

          </TouchableOpacity>
          <TouchableOpacity
          activeOpacity={1}
            style={{}}
            onPress={onPrivacyPolicyPress}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>



            <View>
              <SemiBoldText style={{fontSize:16,marginLeft:10}} >
                Terms and Conditions

              </SemiBoldText>
            </View>

            <View>
              <Image
                source={images.Arrow}
                style={{
                  height: 14,
                  width: 14,
                  transform: [{rotate: '180deg'}],
                }}
              />
            </View>
            </View>

          </TouchableOpacity>
          <TouchableOpacity
          activeOpacity={1}
            style={{}}
            onPress={onReportRequestPress}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>



            <View>
              <SemiBoldText style={{fontSize:16,marginLeft:10}} >
                Report An Issue

              </SemiBoldText>
            </View>

            <View>
              <Image
                source={images.Arrow}
                style={{
                  height: 14,
                  width: 14,
                  transform: [{rotate: '180deg'}],
                }}
              />
            </View>
            </View>

          </TouchableOpacity>
          <TouchableOpacity
          activeOpacity={1}
            style={{}}
            onPress={onReportRequestPress}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>



            <View>
              <SemiBoldText style={{fontSize:16,marginLeft:10}} >
                Requset Feature

              </SemiBoldText>
            </View>

            <View>
              <Image
                source={images.Arrow}
                style={{
                  height: 14,
                  width: 14,
                  transform: [{rotate: '180deg'}],
                }}
              />
            </View>
            </View>

          </TouchableOpacity>
          </View>

          <View style={{height:1,backgroundColor:colors.bordercolor,width:SCREEN_WIDTH-60,marginTop:30}}/>
          <View>

<View
  style={styles.profileDetainContainer}
  >
      <View style={{flexDirection:'row',alignItems:'center',}}>
          <View style={{height:40,width:40,alignItems:'center',justifyContent:'center',marginRight:15}}>

      <Image
      source={images.Account}
      style={{
        height: 20,
        width: 20,
      }}
    />
          </View>



  <View>
    <BoldText style={{fontSize:16}} >
      Account

    </BoldText>
  </View>
  </View>
  
</View>
<TouchableOpacity

activeOpacity={1}
  style={{marginTop:-10}}
  onPress={onDeleteAccountPress}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>



  <View>
    <SemiBoldText style={{fontSize:16,marginLeft:10}} >
      Delete Account

    </SemiBoldText>
  </View>

  <View>
    <Image
      source={images.Arrow}
      style={{
        height: 14,
        width: 14,
        transform: [{rotate: '180deg'}],
      }}
    />
  </View>
  </View>

</TouchableOpacity>
<TouchableOpacity
activeOpacity={1}
  style={{}}
  onPress={onLogOutPress}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>



  <View>
    <SemiBoldText style={{fontSize:16,marginLeft:10}} >
      Log Out

    </SemiBoldText>
  </View>

  <View>
    <Image
      source={images.Arrow}
      style={{
        height: 14,
        width: 14,
        transform: [{rotate: '180deg'}],
      }}
    />
  </View>
  </View>

</TouchableOpacity>


</View>
<SemiBoldText style={{textAlign:'center',padding:30}}>Version 1.0</SemiBoldText>

    </View>
  )
}

export default memo(Body)
export const styles= StyleSheet.create({
    profileDetainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15,
        marginBottom: 20,
      },
})