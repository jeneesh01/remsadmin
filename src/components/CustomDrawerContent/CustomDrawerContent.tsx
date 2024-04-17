import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {navigationProp} from '../../@types/navigation';
import {styles} from './styles';
import {images} from '../../util/constant/images';
import BoldText from '../Text/BoldText';
import SemiBoldText from '../Text/SemiBoldText';
import {colors} from '../../util/constant/colors';
import Header from './Header';
import Body from './Body';
import RegularText from '../Text/RegularText';
import {CURRENT_HEIGHT, SCREEN_HEIGHT} from '../../util/constant/responsive';

const CustomDrawerContent = ({props}: any) => {
  
  const navigation = useNavigation<navigationProp>();
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{backgroundColor:colors.DrawerHeader}} />
      <Header />
      <Body />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            marginBottom: 40,
            marginTop: 30,
          }}>
          <RegularText style={{fontSize:14}}>Made With</RegularText>
          <Image source={images.Heart} style={{height: 14, width: 16}} />
          <RegularText style={{fontSize:14}}> in </RegularText>
          <BoldText style={{fontSize:14}}>SURAT </BoldText>
          <Image source={images.IndianFlag} style={{height: 13, width: 18}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomDrawerContent;
