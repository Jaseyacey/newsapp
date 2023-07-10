import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './Stories';
import {BookmarksScreen} from './Bookmarks.screen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="BookmarksScreen"
        component={BookmarksScreen}
        options={{
          headerShown: false,
        }}
      />
    </BottomTabs.Navigator>
  );
};
