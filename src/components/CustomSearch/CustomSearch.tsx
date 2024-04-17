import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import React, {memo} from 'react';
import CustomHeader from '../CustomHeader/CustomHeader';
import {colors} from '../../util/constant/colors';
import {images} from '../../util/constant/images';
type props = {
  value: string;
  onValueChange: (a: string) => void;
};
const CustomSearch = ({value, onValueChange}: props) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchIconContainer}>
        <Image style={styles.searchIconStyle} source={images.Search} />
      </View>
      <TextInput
        placeholder=""
        value={value}
        onChangeText={onValueChange}
        cursorColor={colors.black8}
        style={{
          flex: 1,
          color: colors.black,
          fontSize: 16 ,
        }}
      />
    </View>
  );
};

export default memo(CustomSearch);
export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black8,
    borderRadius: 10,
    height: 44,
    flexDirection: 'row',
  },
  searchIconContainer: {
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIconStyle: {
    height: 18,
    width: 18,
    tintColor: colors.black,
  },
});
