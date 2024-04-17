import React, {memo} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {fonts} from '../../util/constant/fonts';
import { colors } from '../../util/constant/colors';

const RegularText = (props: TextProps) => {
  return <Text {...props} style={[styles.text, props.style]} />;
};

export default memo(RegularText);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color:colors.black
    // add basic styles
  },
});
