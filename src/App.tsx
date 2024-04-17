import { View, Text, StyleSheet } from 'react-native'
import React, { memo } from 'react'
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import { colors } from './util/constant/colors';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import MainStack from './navigation/MainStack/MainStack';

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
    <FlashMessage
      position="top"
      style={styles.flashMessagecontainer}
      titleStyle={styles.titlestyle}
    />
  </Provider>
  )
}

export default memo(App);
export const styles = StyleSheet.create({
    flashMessagecontainer: {
      alignItems: 'center',
      margin: 10,
      borderRadius: 20,
      justifyContent: 'center',
      marginTop: 20,
    },
    titlestyle: {
      alignSelf: 'center',
      color: colors.white,
    },
  });
  