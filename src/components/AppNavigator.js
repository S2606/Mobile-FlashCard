import React from 'react';
import { createAppContainer } from 'react-navigation';
import MainTabNavigator from './MainNavigator';

/**
 * Component for initializing the navigators
 */
export default createAppContainer(MainTabNavigator);