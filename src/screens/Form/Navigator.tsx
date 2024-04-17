import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {memo} from 'react';
import Completed from './Completed';
import Screen1 from './Screen1/Screen1';
import Screen2 from './Screen2/Screen2';
export type FormParamList = {
  Screen1:undefined;
  Completed: undefined;
  Screen2:undefined
};
const FormStack = createStackNavigator<FormParamList>();
const Navigator: React.FC = () => {
  return (
    <FormStack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <FormStack.Screen
        name="Screen1"
        component={Screen1}
      />
        <FormStack.Screen
        name="Screen2"
        component={Screen2}
      />
      <FormStack.Screen name="Completed" component={Completed} />
    </FormStack.Navigator>
  );
};

export default memo(Navigator);
