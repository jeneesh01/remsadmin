import {StyleSheet} from 'react-native';
import {colors} from '../../util/constant/colors';
import {SIZE_05, SCREEN_WIDTH, SIZE_10} from '../../util/constant/responsive';

export const styles = StyleSheet.create({
  type1View: {
    minWidth: 120,
    minHeight: 35,
    backgroundColor: colors.primary,
    borderRadius: SIZE_05,
    width: SCREEN_WIDTH / 3,
    height: SCREEN_WIDTH * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  type1Text: {padding: SIZE_05, color: colors.white},
  type2View: {
    minWidth: 120,
    minHeight: 35,
    borderRadius: SIZE_05,
    width: SCREEN_WIDTH / 3,
    height: SCREEN_WIDTH * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  type2Text: {
    padding: SIZE_10,
    color: colors.primary,
  },
});
