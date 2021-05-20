import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import MyHeader from '../components/MyHeader'

export default class Appie extends Component{
  render(){
    return(
      <View>
      <MyHeader title = "Appie" />
        <Text style = {{marginTop:200, marginLeft:100, fontSize:20}}>Appie Screen</Text>
      </View>
    )
  }
}