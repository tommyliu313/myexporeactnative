import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import {useState} from 'react';
import {NativeBaseProvider,Button, VStack, FormControl, Input} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Formik} from 'formik';
import * as React from 'react';
import * as yup from "yup";

const Stacker = createNativeStackNavigator();

const validateSchema = yup.object().shape({
  Category: yup.string()
               .required('Category should be set between 6 to 256 characters.')
               .min(6,'Comment should be more than 6 characters.')
               .max(256,'Comment should be less than 256 characters.')
});

function AddCategoryScreen({navigation}){

  return (
    <NativeBaseProvider>
    <ScrollView>
    <Formik
      initialValues={{ Category: ''}}
      validationSchema={validateSchema}
      onSubmit={(values) => console.log(values)}>
         {(props) => (
              <VStack width="90%" mx="3" maxW="300px">
                <FormControl isRequired>
                <FormControl.Label _text={{bold: true}}> New Category </FormControl.Label>
                <Input placeholder="New Category" values={props.values.Category} />
                <FormControl.HelperText _text={{ fontSize: 'xs'}}> Category Name should be more than 6 characteristics </FormControl.HelperText>
                </FormControl>
                <Button colorScheme="danger" onPress={props.handleReset}>Reset</Button>
                <Button colorScheme="success" onPress={props.handleSubmit}> Submit</Button>
                <Button onPress={() => navigation.goBack()}> Back </Button>
              </VStack>
              )}
    
    </Formik>
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
export default AddCategoryScreen;