import React, {memo} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {fonts} from '../../util/constant/fonts';
import { colors } from '../../util/constant/colors';

const BoldText = (props: TextProps) => {
  return <Text {...props} style={[styles.text, props.style]} />;
};

export default memo(BoldText);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: fonts.Bold,
    color:colors.black
    // add basic styles
  },
});
