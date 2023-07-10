import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabsNavigator} from './BottomTabs.navigator';

const RootStack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="BottomTabs"
        component={BottomTabsNavigator}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};
