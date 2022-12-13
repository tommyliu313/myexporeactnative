import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import {useState} from 'react';
import { NativeBaseProvider, Button,HStack, VStack, Heading, Stack ,Center, Box, Pressable, AspectRatio} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faAdd,faChevronRight} from "@fortawesome/free-solid-svg-icons";
import * as React from 'react';

const Stacker = createNativeStackNavigator();

function CheckHistoryScreen({navigation}){
  const [data,setData] = useState();
  return (
    <NativeBaseProvider>
    <ScrollView>
      <VStack>
      </VStack>
      <Button onPress={() => navigation.goBack()}> Back </Button>
    </ScrollView>
  </NativeBaseProvider>
  )
}

const style = StyleSheet.create({
  titletext:{
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 20,
  },
    main:{
    flex: 0.5,
    margin: 20
  },
  column:{
    flexDirection: "column",

  },
  row:{
    flexDirection: "row",
    flexWrap: "wrap",
  },
  circle:{
    borderRadius: 20,
    margin: 0,
    padding: 30,
    height: 'auto',
    width: 'auto'
  },
  text:{
    textAlign: 'center',
    padding: 10,
    margin: 10,
    alignSelf:'flex-end'
  },
  container:{
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: "#f0ff00",
    margin: 20
  }
});
export default CheckHistoryScreen;