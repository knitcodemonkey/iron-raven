import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import PracticeScreen from './screens/PracticeScreen';
import TunerScreen from './screens/TunerScreen';

const routeConfig = {
  Home: { screen: HomeScreen },
  Practice: { screen: PracticeScreen },
  Tuner: { screen: TunerScreen },
};

const Router = StackNavigator(routeConfig);

export default Router;