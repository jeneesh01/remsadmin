import {StyleSheet} from 'react-native';
import {colors} from '../../util/constant/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexGrow: 1,
  },
  mainImage: {
    height: 70,
    width: 70,
    borderRadius: 100,
  },

  profileDetainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginBottom: 20,
  },
  textImageStyle: {
    height: 36,
    width: 36,
    backgroundColor: colors.DarkBgColor,
    borderRadius: 100,
    textAlign: 'center',
    padding: 4,
  },
  borderStyle: {
    borderTopWidth: 1,
    borderColor: colors.bordercolor,
    marginTop: 8,
    width: '100%',
  },
  bodyContainer: {
    marginTop: 15,
  },
});
