import React, {Component} from 'react';
import { ImageBackground } from 'react-native';
import {Text, View, TouchableOpacity} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class MyHeader extends Component{
  render(){
    return(
         <Header
         image
         imageSource = {require('../assets/APPIE.jpg')}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: this.props.title, style: { color: '#fff', fontSize: 25 } }}
          backgroundColor="orange"
          />


    )
  }
}