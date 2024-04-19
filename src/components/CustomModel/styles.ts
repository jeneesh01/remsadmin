import {StyleSheet} from 'react-native';
import {colors} from '../../util/constant/colors';

export const styles = StyleSheet.create({
  firstmMaincontainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  mCloseStyle: {
    height: 30,
    width: 30,
    borderRadius: 5,
  },
  borderStyle: {
    borderColor: colors.bordercolor,
    borderWidth: 1,
    opacity: 0.3,
    marginVertical: 5,
  },
  warningTextstyle: {
    color: colors.black,
    fontSize: 18,
    letterSpacing: 0.3,
    alignSelf: 'center',
  },
  checkBoxstyle: {
    height: 20,
    width: 20,
    padding: 10,
  },
  appriciationStyle: {
    height: 180,
    width: 180,
    alignSelf: 'center',
  },
  textInputStyle: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.bordercolor,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRightColor: 'red',
    color: colors.black,
    paddingLeft: 10,
    textAlignVertical: 'top',
    height: 100,
  },
});
