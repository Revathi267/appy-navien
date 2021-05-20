import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import SideBarMenu  from './SideBarMenu';
import ProfileScreen from '../screens/ProfileScreen'
import ContactScreen from '../screens/ContactScreen'
export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  Profile: {
    screen: ProfileScreen
    },
  Contact: {
    screen: ContactScreen
    }
  },
  
  {
    contentComponent:SideBarMenu
  },
  {
    initialRouteName : 'Home'
  })