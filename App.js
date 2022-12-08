import React ,{ useCallback } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {NativeBaseProvider,Button, VStack, Stack} from 'native-base';
import MainContainer from'./navigation/MainContainer';

const Stacker = createNativeStackNavigator();
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

function MainNavigation(){
  return(
  <NavigationContainer independent={true}>
      <Stacker.Navigator initialRouteName="Main" screenOptions={{headerShown: false}} >
        <Stacker.Screen name="Main" component={MainScreen} />
        <Stacker.Screen name="MainContainer" component={MainContainer}/>
      </Stacker.Navigator>
    </NavigationContainer>)
}

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
});

export default MainNavigation;

