import {Text, View, StyleSheet, TouchableHighlight, Pressable } from 'react-native';
import * as React from "react";
import App from '../App'
import { useState} from "react"



export default function CustomButton({name, originalcolor, aftercolor}){
   const [pressablePressed, setPressablePressed] = useState(0);
  return( 
    <View>
      <TouchableHighlight>  
      <View>
      <Pressable onPress={() => [setPressablePressed(pressablePressed + 1)]}
      style={({pressed}) => [
        {backgroundColor: pressed
        ? aftercolor
        : originalcolor
          },
          styles.button
          ]     }>
        <Text style={styles.buttontext}>
        {name}
        </Text>
        </Pressable>
      </View>
      </TouchableHighlight>
      </View>
      )

}


const styles = StyleSheet.create({
  button:{
    alignItems: "center",
    borderRadius: 200,
    padding: 20,
    margin: 30,
    shadowOffset:{
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
    shadowColor: "#000"
  },
  buttontext:{
    color: "white",
    fontFamily: "Inter"
  }
})

