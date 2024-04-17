import React, {memo} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {fonts} from '../../util/constant/fonts';
import { colors } from '../../util/constant/colors';

const SemiBoldText = (props: TextProps) => {
  return <Text {...props} style={[styles.text, props.style]} />;
};

export default memo(SemiBoldText);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: fonts.SemiBold,
    color:colors.black
    // add basic styles
  },
});
