import React, {memo} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {fonts} from '../../util/constant/fonts';
import { colors } from '../../util/constant/colors';

const Medium = (props: TextProps) => {
  return <Text {...props} style={[styles.text, props.style]} />;
};

export default memo(Medium);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color:colors.black
    // add basic styles
  },
});
