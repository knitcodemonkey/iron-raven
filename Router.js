import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';

const routeConfig = {
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
};

const Router = StackNavigator(routeConfig);

export default Router;