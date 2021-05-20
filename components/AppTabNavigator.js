import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Appie from '../screens/Appie'
import Baby from '../screens/Baby'



export const AppTabNavigator = createBottomTabNavigator({
  Appie : {
    screen: Appie,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/APPIE.jpg")} style={{width:80, height:80}}/>
    }
  },
  Baby: {
    screen: Baby,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/BABY.jpg")} style={{width:80, height:80}}/>
    }
  }
});