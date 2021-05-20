import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import MyHeader from '../components/MyHeader'

export default class Baby extends Component{
  render(){
    return(
      <View>
      <MyHeader title = "Baby"/>
        <Text style = {{marginTop:200, marginLeft:100, fontSize:20}}>Baby Screen</Text>
      </View>
    )
  }
}