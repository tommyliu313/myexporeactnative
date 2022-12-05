import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import {useState} from "react";
import {useFonts} from 'expo-font';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function FormatText({title}) {
  
  const [text, onChangeText] = React.useState("Please Fill in .....");
  const [guidemultiline, setGuidemultiline] = React.useState("You can type your comment");
  const [multiline,setMultiline] = useState('false');
  
  const [loaded] = useFonts({
    josefinsans: require('../asset/fonts/JosefinSans-Regular.ttf')
  });
  if(!loaded){
    return null;
  }
  return (
    <View>
      <Text style={styles.paragraph}>
    {title}
      </Text>
      <Card>
  <TextInput
    style={styles.input}
    placeholder={text}
    />
      </Card>
</View>
  );
}



const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'josefinsans'
  },
  input:{
    height: 40,
    borderRadius: 20,
    margin: 12,
    color: "#ffffff",
    backgroundColor: "#808080"
    
  }
});
