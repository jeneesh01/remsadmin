import React, { memo, useEffect } from 'react'
import {  createStackNavigator } from '@react-navigation/stack'
import AuthStack from '../AuthStack/AuthStack';
import { MainStackParamList } from '../../@types/navigation';
import ForgotPassword from '../../screens/ForgotPassword/ForgotPassword';
import Login from '../../screens/Login/Login';
import Register from '../../screens/Register/Register';
import CitySelection from '../../screens/CitySelection/CitySelection';
import Completed from '../../screens/Form/Completed';
import Form from '../../screens/Form/Form';
import Drawer from '../Drawer/Drawer';
import PropertyScreen from '../../components/CustomProperty/PropertyScreen';
import { useAppDispatch } from '../../redux/app/store';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';
import Settings from '../../screens/Settings/Settings';
import Home from '../../screens/Home/Home';


const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  

  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name='Auth' component={AuthStack} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        <Stack.Screen name='CitySelection' component={CitySelection} />
        <Stack.Screen name='Completed' component={Completed} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Property" component={PropertyScreen} />
        <Stack.Screen name="Settings" component={Settings} />

        



    </Stack.Navigator>
  )
}

export default memo(MainStack)