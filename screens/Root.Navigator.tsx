import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabsNavigator} from './BottomTabs.navigator';
import {StoryDetailsModal} from '../screens/StoryDetailsModal.screen';
import {RootStackParamList} from '../types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="BottomTabs"
        component={BottomTabsNavigator}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="StoryDetailsModal"
        component={StoryDetailsModal}
        options={{presentation: 'modal'}}
      />
    </RootStack.Navigator>
  );
};
