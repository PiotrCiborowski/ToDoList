import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Home from '../screens/Home';
import List from '../screens/List';
import Text from '../screens/Text';
//import { Colors } from 'react-native/Libraries/NewAppScreen';

import Colors from '../constans/Colors';

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: Colors.dark,
          inactiveTintColor: Colors.inactive,
          style: { backgroundColor: Colors.medium }}}>
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            )
        }}
      />
      <Tab.Screen 
        name="List"
        component={List}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="lead-pencil" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="Text"
        component={Text}
        options={{
          tabBarLabel: 'Text',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-align-justify" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;