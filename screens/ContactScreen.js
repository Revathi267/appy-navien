import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ContactScreen extends Component{
    render(){
        return(
            <View style={{flex:1, marginTop:200}}>
                <Text style={[styles.formTextInput,{fontSize:20}]}>Customer Care</Text>
                <Text style={[styles.formTextInput,{fontSize:20}]}>Contact Details</Text>
                <Text style={styles.formTextInput}>Mobile: 9994673132</Text>
                <Text style={styles.formTextInput}>email: sbasalem1@gmail.com</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formTextInput:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
      }
}) 