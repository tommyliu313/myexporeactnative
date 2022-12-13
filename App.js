import React ,{ useCallback} from "react";
import { ImageBackground, StyleSheet, Text, View, BackHandler } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {NativeBaseProvider,Button, VStack} from 'native-base';
import MainContainer from'./navigation/MainContainer';
import {useEffect} from 'react';
import createTable from './data/database/createtable';
import { enableScreens } from 'react-native-screens';
enableScreens();
const Stack = createNativeStackNavigator();
const asset = [require('./assets/restaurant.jpg')];

 function MainScreen({navigation}){


  return(
  <View style={styles.container}>

    <ImageBackground source={asset[0]} resizeMode="cover" style={styles.image}>
    
    <View style={{flex:0.2}}>
     <Text style={styles.text}>Restaurant Blog
     </Text>
     </View>
      <View style={{flex:0.1}}>
     <NativeBaseProvider>
      <VStack space={4} aligmItem="center">
      <Button colorScheme="success" onPress={() => navigation.navigate('MainContainer')}> Welcome</Button>
      <Button colorScheme="danger" onPress={() => BackHandler.exitApp()}> Exit</Button>
    </VStack>
    </NativeBaseProvider>
    </View>
        
    </ImageBackground>
  </View>
)}

export default function MainNavigation(){

  useEffect(() => {
    createTable()
  }, [])

  return(
  <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="MainContainer" component={MainContainer}/>
      </Stack.Navigator>
    </NavigationContainer>);}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000"
  }
})
