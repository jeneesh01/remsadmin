import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {memo, useState} from 'react';
import {colors} from '../../util/constant/colors';
import {images} from '../../util/constant/images';
import BoldText from '../Text/BoldText';
import SemiBoldText from '../Text/SemiBoldText';
import {styles} from './styles';
import { useAppSelector } from '../../redux/app/store';

const Header = () => {
  const useInfo = useAppSelector((state)=>state.auth?.userInfo)
  const [isDDPressed, setIsDDPressed] = useState<boolean>(false);
  const onProfilePress = () => {
    setIsDDPressed(!isDDPressed);
  };

  return (
    <View>
      <View style={{backgroundColor: colors.DrawerHeader}}>
        <View style={{marginHorizontal: 30}}>
          <View style={{marginTop: 30}}>
            <Image source={images.LOGO} style={styles.mainImage} />
          </View>
          <TouchableOpacity
          activeOpacity={1}
            style={styles.profileDetainContainer}
            onPress={onProfilePress}>
            <View>
              <BoldText style={{fontSize:16}} >
                {useInfo?.name ? useInfo?.name:"Jeneesh S"}
              </BoldText>
              <SemiBoldText
                style={{marginTop: -2,fontSize:16}}>
                  {
                    useInfo?.email ? useInfo?.email :"jeneesh@gmail.com"
                  }
              </SemiBoldText>
            </View>
            {/* <View>
              <Image
                source={images.Arrow}
                style={{
                  height: 14,
                  width: 14,
                  transform: [{rotate: isDDPressed ? '90deg' : '-90deg'}],
                }}
              />
            </View> */}
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
};

export default memo(Header);
