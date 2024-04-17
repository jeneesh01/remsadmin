import React, { memo, useEffect } from 'react'
import {  createStackNavigator } from '@react-navigation/stack'
import Login from '../../screens/Login/Login';
import Register from '../../screens/Register/Register';
import ForgotPassword from '../../screens/ForgotPassword/ForgotPassword';
import { AuthStackParamList } from '../../@types/navigation';



const Stack = createStackNavigator<AuthStackParamList>();

const MainStack = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />

    </Stack.Navigator>
  )
}

export default memo(MainStack)