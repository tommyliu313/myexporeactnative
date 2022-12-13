import { Text, View, StyleSheet, ScrollView, Image, Alert, BackHandler} from 'react-native';
import React from "react";
import {NativeBaseProvider,Button, VStack, HStack} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Sharing from 'expo-sharing';
import CheckHistoryScreen from '../record/checkrecord';
import {useState, useEffect} from 'react';
import {deleteAllRestaurantData, deleteAllCommentData} from '../../data/record/remove';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faFacebook,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons';
import * as Linking from 'expo-linking';


const Stack = createNativeStackNavigator();

const PopupWindow = () => {

  Alert.alert(
    "Attention!",
    "Are you sure to delete all information ?",
    [
      {text: "Cancel", onPress:() => console.log("No need to delete data")},
      {text: "Yes", onPress:() => console.log("Delete his data")}
    ]
  )
}


function SettingScreen({navigation}){


  return(
  <View style={style.main}>
  <NativeBaseProvider>
    <VStack space={3}>
  <Text style={style.titletext}>Irreversible Action</Text>
  <Button onPress={() => PopupWindow()}> Delete Data </Button>

  <Text style={style.titletext}>Screen Action</Text>
  <Button colorScheme="danger" onPress={() => BackHandler.exitApp()}>Exit</Button>

  <Text style={style.titletext}>Options</Text>
   <Button onPress={() => navigation.navigate('Check History')}>Check History</Button>
   
   <Button onPress={() => setShare()}> Sharing the App Out</Button>

   <Text style={style.titletext}>Social Media</Text>
    <HStack space={1}>
    <Button onPress={() => Linking.openURL('https://www.facebook.com')}><FontAwesomeIcon icon={faFacebook} size="90"/></Button>
    <Button onPress={() => Linking.openURL('https://www.instagram.com')}><FontAwesomeIcon icon={faInstagram} size="90"/></Button>
    <Button onPress={() => Linking.openURL('https://www.twitter.com')}><FontAwesomeIcon icon={faTwitter} size="90"/></Button>
    </HStack>
   </VStack>
    </NativeBaseProvider>
  
  </View>
  
  )
}

function SettingChoice(){
  return(
      <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Setting" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Check History" component={CheckHistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}
const style = StyleSheet.create({
  main:{
    flex: 1,
    margin: 20,
    padding: 10
  },
  titletext:{
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 20,
  }
})

export default SettingChoice;