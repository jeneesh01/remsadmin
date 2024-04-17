import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {memo, useDebugValue, useEffect, useState} from 'react';
import Home from '../../screens/Home/Home';
import CustomDrawerContent from '../../components/CustomDrawerContent/CustomDrawerContent';
import { SCREEN_WIDTH } from '../../util/constant/responsive';
import Settings from '../../screens/Settings/Settings';
export type DrawerParamList={
  Home:undefined;
  Settings:undefined
  
}
const DrawerNavi = createDrawerNavigator<DrawerParamList>();
const Drawer: React.FC = () => {
  return (
    <DrawerNavi.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTitle: '',
        drawerType: 'front',
        drawerStyle: {
          width: Math.min(400, SCREEN_WIDTH * 0.82),
        },
        
      }}
      
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <DrawerNavi.Screen name="Home" component={Home} />
      <DrawerNavi.Screen name="Settings" component={Settings} />

      {/* <DrawerNavi.Screen name="Language" component={Languages} />
      <DrawerNavi.Screen name="Reminder" component={Reminder} />
      <DrawerNavi.Screen name="History" component={History} />
      <DrawerNavi.Screen name="Persons" component={Persons} />
      <DrawerNavi.Screen name="Setting" component={SettingStack} /> */}
    </DrawerNavi.Navigator>
  );
};

export default memo(Drawer);
