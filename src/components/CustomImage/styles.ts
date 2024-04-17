import {StyleSheet} from 'react-native';
import { colors } from '../../util/constant/colors';
import { CURRENT_WIDTH, SCREEN_WIDTH } from '../../util/constant/responsive';
import { fonts } from '../../util/constant/fonts';
export const styles = StyleSheet.create({

 
  modalcontainerstyle: {
    height: 120,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15,
    borderColor:colors.DarkBgColor
  },
  modaltviewextstyle: {
    margin: 15,
  },
  cancelcontainerstyle: {
    height: 50,
    marginHorizontal: 20,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.DarkBgColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  midcontainer: {
    width: CURRENT_WIDTH - 40,
    borderWidth: 0.4,
    borderColor: colors.DarkBgColor,
    margin: 5,
  },

  text: {
    fontFamily: fonts.SemiBold,
    letterSpacing: 0.5,
    fontSize: 14,
    color: colors.black,
  },
  tochableOpacitystyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
