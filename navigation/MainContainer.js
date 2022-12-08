import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faHouse, faCamera, faCog, faLocationDot, faComment} from "@fortawesome/free-solid-svg-icons";

import HomeScreen from "./screens/Home";
import LocationScreen from "./screens/Location";
import MediaScreen from "./screens/media";
import CommentScreen from './screens/Commentpage';
import SettingScreen from './screens/setting';

const Tab = createBottomTabNavigator();


function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        tabBarActiveTintColor: '#1CEFC9',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
           <FontAwesomeIcon icon={faHouse} style={{fontSize: 32}} />
          ),
        }}
      />
      <Tab.Screen
        name="Comment"
        component={CommentScreen}
        options={{
          tabBarLabel: 'Comment',
          tabBarActiveTintColor: '#1CEFC9',
          tabBarIcon: () => (
           <FontAwesomeIcon icon={faComment}/>
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          tabBarLabel: 'Location',
          tabBarActiveTintColor: '#1CEFC9',
          tabBarIcon: () => (
           <FontAwesomeIcon icon={faLocationDot}/>
          ),
        }}
      />
      <Tab.Screen
        name="Media"
        component={MediaScreen}
        options={{
          tabBarLabel: 'Media',
          tabBarIcon: () => (
               <FontAwesomeIcon icon={faCamera}/>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: () => (
               <FontAwesomeIcon icon={faCog}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MainContainer() {
  return (
    <NavigationContainer independent={true}>
      <BottomTab/>
    </NavigationContainer>
  );
}
